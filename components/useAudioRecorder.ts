// Simple React hook for recording audio from user's microphone
import { useState, useRef } from 'react';

export function useAudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const onRecordingDoneRef = useRef<(() => void) | null>(null);
  const [error, setError] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunks = useRef<Blob[]>([]);

  const startRecording = async () => {
      console.log('[DEBUG] startRecording() called');
    setError(null);
    setAudioUrl(null);
    onRecordingDoneRef.current = null;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mediaRecorder = new window.MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunks.current = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.current.push(e.data);
        }
      };
      mediaRecorder.onstop = () => {
        console.log('[DEBUG] mediaRecorder.onstop fired');
        const blob = new Blob(chunks.current, { type: 'audio/webm' });
        setAudioUrl(URL.createObjectURL(blob));
        if (onRecordingDoneRef.current) {
          onRecordingDoneRef.current();
        }
      };
      mediaRecorder.start();
      setIsRecording(true);
      console.log('[DEBUG] isRecording set to true');
    } catch (err: any) {
      setError(err.message || 'Could not start recording');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      if (mediaRecorderRef.current.state !== 'inactive') {
        console.log('[DEBUG] stopRecording() called, state:', mediaRecorderRef.current.state);
        mediaRecorderRef.current.stop();
        setIsRecording(false);
        // Release the microphone
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
          streamRef.current = null;
        }
      } else {
        console.log('[DEBUG] stopRecording() called but MediaRecorder already inactive');
      }
    } else {
      console.log('[DEBUG] stopRecording() called but no MediaRecorder');
    }
  };
  // Allow parent to register a callback for when recording is done
  const setOnRecordingDone = (cb: () => void) => {
    onRecordingDoneRef.current = cb;
  };

  return { isRecording, audioUrl, error, startRecording, stopRecording, setOnRecordingDone };
}
