import { FaMicrophone, FaStop } from 'react-icons/fa';

interface AudioControlsProps {
  isRecording: boolean;
  onStart: () => void;
  onStop: () => void;
  permissionStatus: 'prompt' | 'granted' | 'denied';
  errorMessage: string | null;
}

export default function AudioControls({
  isRecording,
  onStart,
  onStop,
  permissionStatus,
  errorMessage,
}: AudioControlsProps) {
  return (
    <div className="flex flex-col items-start gap-3">
      <button
        onClick={isRecording ? onStop : onStart}
        className={`flex items-center gap-2 px-6 py-3 rounded-full text-white transition-colors ${
          isRecording 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
        disabled={permissionStatus === 'denied'}
      >
        {isRecording ? (
          <>
            <FaStop className="w-4 h-4" />
            Stop Recording
          </>
        ) : (
          <>
            <FaMicrophone className="w-4 h-4" />
            Start Recording
          </>
        )}
      </button>

      {errorMessage && (
        <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-200">
          {errorMessage}
        </div>
      )}

      {permissionStatus === 'denied' && (
        <div className="text-sm text-gray-600">
          To enable microphone access:
          <ol className="list-decimal list-inside mt-2">
            <li>Click the camera/microphone icon in your browser's address bar</li>
            <li>Select "Allow" for microphone access</li>
            <li>Refresh the page</li>
          </ol>
        </div>
      )}
    </div>
  );
}