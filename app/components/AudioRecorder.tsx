'use client';

import React, { useState, useCallback } from 'react';
import { FaMicrophone, FaStop } from 'react-icons/fa';

interface AudioRecorderProps {
  onTranscript: (text: string) => void;
  isRecording: boolean;
  onRecordingStateChange: (isRecording: boolean) => void;
}

export default function AudioRecorder({ 
  onTranscript, 
  isRecording, 
  onRecordingStateChange 
}: AudioRecorderProps) {
  const [error, setError] = useState<string>('');
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const requestMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop()); // Clean up the test stream
      setHasPermission(true);
      setError('');
      return true;
    } catch (err: any) {
      setHasPermission(false);
      if (err.name === 'NotAllowedError') {
        setError('Microphone access was denied. Please allow microphone access in your browser settings.');
      } else if (err.name === 'NotFoundError') {
        setError('No microphone found. Please connect a microphone and try again.');
      } else {
        setError(`Microphone error: ${err.message}`);
      }
      return false;
    }
  };

  const toggleRecording = async () => {
    if (!isRecording) {
      const permitted = await requestMicrophonePermission();
      if (permitted) {
        onRecordingStateChange(true);
      }
    } else {
      onRecordingStateChange(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={toggleRecording}
        className={`flex items-center gap-2 px-6 py-3 rounded-full text-white transition-colors ${
          isRecording 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
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
      
      {error && (
        <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-200">
          {error}
        </div>
      )}
      
      {hasPermission === false && (
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