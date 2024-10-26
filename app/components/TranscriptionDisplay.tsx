import React from 'react';

interface TranscriptionDisplayProps {
  title: string;
  text: string;
  showLastThree?: boolean;
  bgColor?: string;
}

export default function TranscriptionDisplay({
  title,
  text,
  showLastThree = false,
  bgColor = 'bg-white'
}: TranscriptionDisplayProps) {
  const getDisplayText = (text: string) => {
    if (!showLastThree) return text;
    
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    return sentences.slice(-3).join('');
  };

  return (
    <div className={`p-4 rounded-lg border ${bgColor}`}>
      <h2 className="font-semibold mb-2">{title}:</h2>
      <div className="min-h-[200px] whitespace-pre-wrap">
        {getDisplayText(text)}
      </div>
    </div>
  );
}