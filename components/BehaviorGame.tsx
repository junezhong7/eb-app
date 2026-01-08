
'use client'
import { useState, useRef, useEffect } from 'react';
import { useAudioRecorder } from './useAudioRecorder';
import { uploadAudioToAzure } from './uploadAudioToAzure';

// Remove duplicate declaration and move auto-upload logic inside main function below all state declarations
import ToyQuestionSVG from './ToyQuestionSVG';

interface ImageOption {
  left: number;
  top: number;
  width: number;
  height: number;
  score: number;
  feedback: string;
  label: string;
}

interface Behavior {
  id: number;
  scenario: string;
  options?: {
    text: string;
    score: number;
    feedback: string;
  }[];
  image?: string;
  imageOptions?: ImageOption[];
}

const behaviors: Behavior[] = [
  {
    id: 1,
    scenario: "Your friend accidentally bumps into you and it hurts a little. What would you do?",
    options: [
      {
        text: "Yell loudly and push back",
        score: 0,
        feedback: "This might make things worse. We can express our feelings with words, like saying 'You bumped into me, it hurts a little.'"
      },
      {
        text: "Tell your friend how you feel, then continue playing together",
        score: 10,
        feedback: "Great job! Telling your friend how you feel and continuing to play is a positive way to handle the situation."
      },
      {
        text: "Walk away angrily and ignore your friend",
        score: 5,
        feedback: "Walking away can help you calm down, but telling your friend how you feel is better so they can understand you."
      }
    ]
  },
  {
    id: 2,
    scenario: "You want to play with a toy, but another child is playing with it. What would you do? (Click on the image to answer)",
    imageOptions: [
      {
        left: 55, top: 45, width: 70, height: 70, // left circle
        score: 0,
        feedback: "Grabbing toys is not a good way and might hurt others. We can wait or ask politely.",
        label: "Grab"
      },
      {
        left: 375, top: 45, width: 70, height: 70, // right circle
        score: 10,
        feedback: "Very good! You learned to wait patiently and communicate politely. These are great social skills!",
        label: "Wait/Ask"
      },
      {
        left: 215, top: 215, width: 70, height: 70, // bottom circle
        score: 3,
        feedback: "Sometimes asking adults for help is okay, but trying to solve the problem yourself first is better.",
        label: "Cry/Adult"
      }
    ]
  },
  {
    id: 3,
    scenario: "You made a mistake and your teacher or parent found out. What would you do?",
    options: [
      {
        text: "Lie and say you didn't do it",
        score: 0,
        feedback: "Lying will make the problem worse. Being honest might be hard, but it's the right choice."
      },
      {
        text: "Admit the mistake and apologize",
        score: 10,
        feedback: "Very brave! Admitting mistakes takes courage, and it's an important step in growing up. Everyone makes mistakes, what matters is learning from them."
      },
      {
        text: "Stay silent and hope no one notices",
        score: 2,
        feedback: "Staying silent might avoid the problem temporarily, but being honest will make us feel better and get help."
      }
    ]
  },
  {
    id: 4,
    scenario: "You feel very angry because things didn't go as you wanted. What would you do?",
    options: [
      {
        text: "Throw things or hit someone",
        score: 0,
        feedback: "Hurting others or breaking things is not a good way. We can express emotions in other ways."
      },
      {
        text: "Take deep breaths and tell an adult how you feel",
        score: 10,
        feedback: "Excellent! You learned to manage emotions in a healthy way. Deep breathing and expressing feelings are great methods!"
      },
      {
        text: "Cry loudly",
        score: 4,
        feedback: "Crying is one way to express emotions, but telling an adult how you feel will help them help you better."
      }
    ]
  },
  {
    id: 5,
    scenario: "You see a child bullying another child. What would you do?",
    options: [
      {
        text: "Join the bully",
        score: 0,
        feedback: "Bullying others is wrong. We should help the child being bullied, not make things worse."
      },
      {
        text: "Tell a teacher or adult, or help the child being bullied",
        score: 10,
        feedback: "You did the right thing! Helping others and seeking help are both brave and kind actions. You're a good friend!"
      },
      {
        text: "Pretend you didn't see and walk away",
        score: 3,
        feedback: "While walking away is safe, telling an adult can help the child being bullied, which is a better choice."
      }
    ]
  }
]

export default function BehaviorGame() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [recordingStarted, setRecordingStarted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [selectedImageOption, setSelectedImageOption] = useState<number | null>(null);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  // Audio recording state for question 3
  const [recordingDone, setRecordingDone] = useState(false);
  const [waitingToRecord, setWaitingToRecord] = useState(false);
  const { isRecording, audioUrl: userAudioUrl, error: recordError, startRecording, stopRecording, setOnRecordingDone } = useAudioRecorder();
  const [recordingProgress, setRecordingProgress] = useState(0); // 0-10 seconds

  // Automatically upload recording when done
  useEffect(() => {
    const autoUpload = async () => {
      if (recordingDone && userAudioUrl) {
        setUploadStatus('Uploading...');
        try {
          const res = await fetch(userAudioUrl);
          const blob = await res.blob();
          // Get username from localStorage
          let username = '';
          if (typeof window !== 'undefined') {
            username = localStorage.getItem('username') || '';
          }
          // Get Brisbane time (UTC+10)
          const now = new Date();
          const brisbaneOffset = 10 * 60; // minutes
          const brisbaneDate = new Date(now.getTime() + (brisbaneOffset - now.getTimezoneOffset()) * 60000);
          const dateStr = brisbaneDate.toISOString().replace(/[:.]/g, '-');
          const filename = `${username}-recording-${dateStr}.webm`;
          await uploadAudioToAzure(blob, filename);
          setUploadStatus('Upload successful!');
        } catch (err: any) {
          setUploadStatus('Upload failed: ' + (err.message || 'Unknown error'));
        }
      }
    };
    autoUpload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordingDone, userAudioUrl]);

  const currentBehavior = behaviors[currentQuestion];

  // Autoplay audio when question 3 is loaded, ensure audio is loaded before playing
  // Play question 3 audio and trigger recording after
  useEffect(() => {
    if (currentBehavior.id === 3 && audioRef.current) {
      setRecordingStarted(false);
      setRecordingDone(false);
      setWaitingToRecord(false);
      setRecordingProgress(0);
      const audio = audioRef.current;
      audio.currentTime = 0;
      // Play audio
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const onCanPlay = () => {
            audio.play().catch(() => {});
            audio.removeEventListener('canplay', onCanPlay);
          };
          audio.addEventListener('canplay', onCanPlay);
        });
      }
      // When audio ends, wait 3s, then start recording for 10s
      let timeoutId: NodeJS.Timeout | null = null;
      let intervalId: NodeJS.Timeout | null = null;
      const onEnded = () => {
        setWaitingToRecord(true);
        setTimeout(async () => {
          setWaitingToRecord(false);
          setRecordingStarted(true);
          setRecordingProgress(0);
          setOnRecordingDone(() => {
            setRecordingStarted(false);
            setRecordingDone(true);
            setRecordingProgress(10);
            if (intervalId) clearInterval(intervalId);
          });
          await startRecording();
          // Start progress interval
          let elapsed = 0;
          intervalId = setInterval(() => {
            elapsed += 0.1;
            setRecordingProgress(elapsed);
          }, 100);
          // Only start the timer after recording actually starts
          timeoutId = setTimeout(() => {
            stopRecording();
            if (intervalId) clearInterval(intervalId);
          }, 10000);
        }, 3000); // 3 seconds
      };
      audio.addEventListener('ended', onEnded);
      return () => {
        audio.removeEventListener('ended', onEnded);
        if (timeoutId) clearTimeout(timeoutId);
        if (intervalId) clearInterval(intervalId);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBehavior.id]);

  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return;
    if (currentBehavior.imageOptions) {
      // Should not be called for image-based question
      return;
    }
    if (!currentBehavior.options) return;
    const selected = currentBehavior.options[optionIndex];
    setSelectedOption(optionIndex);
    setShowFeedback(true);
    setScore(score + selected.score);
    setAnswers([...answers, {
      questionId: currentBehavior.id,
      score: selected.score,
      feedback: selected.feedback
    }]);
  };

  // For SVG interactive question
  const handleSVGChoice = (idx: number) => {
    if (showFeedback) return;
    if (!currentBehavior.imageOptions) return;
    setSelectedImageOption(idx);
    setShowFeedback(true);
    setScore(score + currentBehavior.imageOptions[idx].score);
    setAnswers([...answers, {
      questionId: currentBehavior.id,
      score: currentBehavior.imageOptions[idx].score,
      feedback: currentBehavior.imageOptions[idx].feedback
    }]);
  };

  const handleNext = () => {
    if (currentQuestion < behaviors.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setSelectedImageOption(null);
      setShowFeedback(false);
    } else {
      setGameCompleted(true);
    }
  };

  // Play audio for question 3 with canplay fallback and user gesture handling, plus error logging
  const playQuestion3Audio = () => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.currentTime = 0;
      // Try to play immediately
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // If play fails (e.g., not loaded), wait for canplay event
          console.error('Audio play() failed:', err);
          const onCanPlay = () => {
            audio.play().catch(e => console.error('Audio play() on canplay failed:', e));
            audio.removeEventListener('canplay', onCanPlay);
          };
          audio.addEventListener('canplay', onCanPlay);
        });
      }
    } else {
      console.error('audioRef.current is null');
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedOption(null)
    setShowFeedback(false)
    setGameCompleted(false)
    setAnswers([])
  }

  const getScoreMessage = () => {
    const totalPossible = behaviors.length * 10
    const percentage = (score / totalPossible) * 100
    
    if (percentage >= 80) {
      return {
        title: "Excellent!",
        message: "You made many good choices! You really know how to handle different situations in positive ways. Keep it up!",
        emoji: "🌟"
      }
    } else if (percentage >= 60) {
      return {
        title: "Well Done!",
        message: "You made good choices most of the time. Keep learning, and you'll get even better!",
        emoji: "👍"
      }
    } else if (percentage >= 40) {
      return {
        title: "Keep Trying!",
        message: "You're learning how to make better choices. Remember, everyone is constantly learning and growing!",
        emoji: "💪"
      }
    } else {
      return {
        title: "A Learning Opportunity!",
        message: "This is a great learning opportunity. Remember, making good choices takes practice, and you'll get better!",
        emoji: "📚"
      }
    }
  }

  if (gameCompleted) {
    const result = getScoreMessage()
    return (
      <div className="game-container">
        <div className="game-completed">
          <div className="result-emoji">{result.emoji}</div>
          <h2>{result.title}</h2>
          <div className="final-score">
            <p className="score-label">Your Total Score:</p>
            <p className="score-value">{score} / {behaviors.length * 10}</p>
          </div>
          <p className="result-message">{result.message}</p>
          <div className="answers-summary">
            <h3>Your Choices Review:</h3>
            {answers.map((answer, index) => {
              const behavior = behaviors[index]
              // Find the option that matches the score and feedback (for text-based questions)
              let selectedOptionText = '';
              if (behavior.options) {
                const found = behavior.options.find(opt => 
                  opt.score === answer.score && opt.feedback === answer.feedback
                );
                selectedOptionText = (found || behavior.options[0]).text;
              } else if (behavior.imageOptions) {
                // For image-based questions, use the label
                const found = behavior.imageOptions.find(opt => 
                  opt.score === answer.score && opt.feedback === answer.feedback
                );
                selectedOptionText = (found && found.label) || '';
              }
              return (
                <div key={index} className="answer-item">
                  <p className="answer-scenario">{behavior.scenario}</p>
                  <p className="answer-choice">Your choice: {selectedOptionText}</p>
                  <p className="answer-feedback">{answer.feedback}</p>
                  <p className="answer-score">Score: {answer.score} points</p>
                </div>
              )
            })}
          </div>
          <button onClick={handleRestart} className="btn-primary btn-large">
            Play Again
          </button>
        </div>
      </div>
    )
  }

  const progress = ((currentQuestion + 1) / behaviors.length) * 100;

  return (
    <div className="game-container">
      <div className="game-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="progress-text">Question {currentQuestion + 1} / {behaviors.length}</p>
      </div>

      <div className="game-question">
        <h2>{currentBehavior.scenario}</h2>
        {/* Play audio for question 3 */}
        {currentBehavior.id === 3 && (
          <div style={{ marginTop: 12 }}>
            <audio ref={audioRef} src="https://novascompass.blob.core.windows.net/media/Question3.mp3" preload="auto" controls />
            <button onClick={playQuestion3Audio} className="btn-primary" style={{ marginTop: 8 }}>
              🔊 Play Question Audio
            </button>
            {/* Recording UI */}
            {waitingToRecord && <div style={{marginTop:12, color:'#888'}}>Preparing to record in 3 seconds...</div>}
            {isRecording && (
              <div style={{marginTop:12}}>
                <div style={{ color: 'red', marginBottom: 4 }}>
                  {recordingProgress < 10
                    ? `Recording... (${(10 - recordingProgress).toFixed(1)}s left)`
                    : null}
                </div>
                <div style={{ width: 220, height: 12, background: '#eee', borderRadius: 6, overflow: 'hidden' }}>
                  <div style={{ width: `${(recordingProgress/10)*100}%`, height: '100%', background: '#f44', transition: 'width 0.1s linear' }} />
                </div>
              </div>
            )}
            {!isRecording && recordingProgress >= 10 && (
              <div style={{marginTop:12}}>
                <div style={{ color: 'red', marginBottom: 4 }}>Recording finished</div>
                <div style={{ width: 220, height: 12, background: '#eee', borderRadius: 6, overflow: 'hidden' }}>
                  <div style={{ width: `100%`, height: '100%', background: '#f44', transition: 'width 0.1s linear' }} />
                </div>
              </div>
            )}
            {userAudioUrl && (
              <div style={{marginTop:12}}>
                <b>Your recording:</b>
                <audio id="user-recording-audio" src={userAudioUrl} controls style={{display:'block', marginTop:4}} />
                <button
                  className="btn-primary"
                  style={{marginTop:8, marginRight:8}}
                  onClick={() => {
                    const audio = document.getElementById('user-recording-audio') as HTMLAudioElement | null;
                    if (audio) {
                      audio.currentTime = 0;
                      audio.play();
                    }
                  }}
                >
                  ▶️ Play Your Recording
                </button>
                <button
                  className="btn-secondary"
                  style={{marginTop:8}}
                  onClick={() => {
                    // Move to question 4
                    setCurrentQuestion((prev) => Math.min(prev + 1, behaviors.length - 1));
                  }}
                >
                  Next Question
                </button>
                {uploadStatus && <div style={{marginTop:8, color:uploadStatus.startsWith('Upload successful')?'green':'red'}}>{uploadStatus}</div>}
              </div>
            )}
            {recordError && <div style={{color:'red'}}>Recording error: {recordError}</div>}
          </div>
        )}

        {/* Play video for question 4 */}
        {currentBehavior.id === 4 && (
          <div style={{ marginTop: 12 }}>
            <video
              id="question4-video"
              src="https://novascompass.blob.core.windows.net/media/Novascompass_VideoDraft.mp4"
              width="480"
              controls
              autoPlay
              style={{ display: 'block', margin: '0 auto 16px auto', background: '#000' }}
            />
          </div>
        )}
      </div>

      {/* Render SVG interactive question for question 2 */}
      {currentBehavior.imageOptions && currentBehavior.id === 2 ? (
        <ToyQuestionSVG
          selected={selectedImageOption}
          showFeedback={showFeedback}
          onSelect={handleSVGChoice}
        />
      ) : (
        <div className="game-options">
          {currentBehavior.options && currentBehavior.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedOption === index ? 'selected' : ''} ${showFeedback ? (option.score >= 7 ? 'correct' : option.score === 0 ? 'wrong' : 'partial') : ''}`}
              onClick={() => handleOptionSelect(index)}
              disabled={showFeedback}
            >
              {option.text}
              {showFeedback && selectedOption === index && (
                <span className="option-score">+{option.score} pts</span>
              )}
            </button>
          ))}
        </div>
      )}

      {showFeedback && (
        <div className="game-feedback">
          <div className="feedback-content">
            <p>{currentBehavior.imageOptions && selectedImageOption !== null
              ? currentBehavior.imageOptions[selectedImageOption].feedback
              : (currentBehavior.options && selectedOption !== null ? currentBehavior.options[selectedOption].feedback : '')}
            </p>
            <p className="current-score">Current Score: {score} points</p>
            <button onClick={handleNext} className="btn-primary">
              {currentQuestion < behaviors.length - 1 ? 'Next Question' : 'View Results'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

