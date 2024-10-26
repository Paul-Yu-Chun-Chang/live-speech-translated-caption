import React from 'react';

interface TranscriptionBoxProps {
  title: string;
  text: string;
  isTranslation?: boolean;
}

export default function TranscriptionBox({ title, text, isTranslation }: TranscriptionBoxProps) {
  return (
    <div className="flex-1 p-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div
        className={`h-[300px] p-4 rounded-lg border overflow-y-auto ${
          isTranslation ? 'bg-blue-50' : 'bg-white'
        }`}
      >
        {text || <span className="text-gray-400">No text yet...</span>}
      </div>
    </div>
  );
}