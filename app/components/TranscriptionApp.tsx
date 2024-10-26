'use client';

import React, { useState, useEffect } from 'react';
import AudioRecorder from './AudioRecorder';
import LanguageSelector from './LanguageSelector';
import TranscriptionDisplay from './TranscriptionDisplay';

export default function TranscriptionApp() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [translation, setTranslation] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('en');
  const [showLastThree, setShowLastThree] = useState(false);

  const handleTranscript = (text: string) => {
    setTranscript(text);
    // Simulate translation (replace with actual API call)
    setTranslation(`Translated: ${text}`);
  };

  const handleRecordingStateChange = (recording: boolean) => {
    setIsRecording(recording);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="border rounded-lg p-8 bg-white shadow-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Speech Transcription and Translation
        </h1>
        
        <div className="flex justify-between items-center mb-8">
          <AudioRecorder
            onTranscript={handleTranscript}
            isRecording={isRecording}
            onRecordingStateChange={handleRecordingStateChange}
          />
          <LanguageSelector
            value={targetLanguage}
            onChange={setTargetLanguage}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <TranscriptionDisplay
            title="Transcript"
            text={transcript}
            showLastThree={showLastThree}
          />
          <TranscriptionDisplay
            title="Translation"
            text={translation}
            showLastThree={showLastThree}
            bgColor="bg-blue-50"
          />
        </div>

        <div className="mt-6 flex items-center justify-end gap-2">
          <label className="text-sm text-gray-600">
            Show last 3 sentences only
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={showLastThree}
              onChange={(e) => setShowLastThree(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}