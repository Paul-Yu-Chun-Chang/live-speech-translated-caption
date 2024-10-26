import React from 'react';
import { FaMicrophone, FaStop } from 'react-icons/fa';

interface RecordButtonProps {
  isRecording: boolean;
  onClick: () => void;
}

export default function RecordButton({ isRecording, onClick }: RecordButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-colors ${
        isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
      {isRecording ? (
        <>
          <FaStop /> Stop Recording
        </>
      ) : (
        <>
          <FaMicrophone /> Start Recording
        </>
      )}
    </button>
  );
}