'use client';

import { useState } from 'react';
import AudioControls from './AudioControls';
import TranscriptionPanel from './TranscriptionPanel';
import LanguageSelector from './LanguageSelector';
import { useAudioRecording } from '../hooks/useAudioRecording';

export default function SpeechApp() {
  const [targetLanguage, setTargetLanguage] = useState('en');
  const [showLastThree, setShowLastThree] = useState(false);
  
  const {
    isRecording,
    transcript,
    translation,
    permissionStatus,
    errorMessage,
    startRecording,
    stopRecording,
  } = useAudioRecording(targetLanguage);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Speech Transcription and Translation
        </h1>

        <div className="flex justify-between items-center mb-6">
          <AudioControls
            isRecording={isRecording}
            onStart={startRecording}
            onStop={stopRecording}
            permissionStatus={permissionStatus}
            errorMessage={errorMessage}
          />
          <LanguageSelector
            value={targetLanguage}
            onChange={setTargetLanguage}
          />
        </div>

        <TranscriptionPanel
          transcript={transcript}
          translation={translation}
          showLastThree={showLastThree}
          onToggleLastThree={() => setShowLastThree(!showLastThree)}
        />
      </div>
    </div>
  );
}