// Utility to upload audio blob to Azure Blob Storage using SAS token
export async function uploadAudioToAzure(blob: Blob, filename: string) {
  const containerUrl =
    'https://novascompass.blob.core.windows.net/media';
  const sasToken =
    'sp=r&st=2026-01-06T05:00:22Z&se=2026-05-01T13:15:22Z&sv=2024-11-04&sr=c&sig=eSly%2Bdsex%2B7%2FE3%2Bzon2a8nDnuIWbj9fHYRiuq8F2Yjs%3D';
  const uploadUrl = `${containerUrl}/${filename}?${sasToken}`;

  const response = await fetch(uploadUrl, {
    method: 'PUT',
    headers: {
      'x-ms-blob-type': 'BlockBlob',
      'Content-Type': blob.type || 'audio/webm',
    },
    body: blob,
  });

  if (!response.ok) {
    throw new Error(`Upload failed: ${response.statusText}`);
  }
  return uploadUrl;
}
