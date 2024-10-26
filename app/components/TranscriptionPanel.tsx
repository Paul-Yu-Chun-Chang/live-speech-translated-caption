interface TranscriptionPanelProps {
  transcript: string;
  translation: string;
  showLastThree: boolean;
  onToggleLastThree: () => void;
}

export default function TranscriptionPanel({
  transcript,
  translation,
  showLastThree,
  onToggleLastThree,
}: TranscriptionPanelProps) {
  const getLastThreeSentences = (text: string) => {
    if (!showLastThree) return text;
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    return sentences.slice(-3).join('');
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <h2 className="font-semibold mb-2">Transcript:</h2>
          <div className="min-h-[200px] whitespace-pre-wrap">
            {getLastThreeSentences(transcript)}
          </div>
        </div>

        <div className="border rounded-lg p-4 bg-blue-50">
          <h2 className="font-semibold mb-2">Translation:</h2>
          <div className="min-h-[200px] whitespace-pre-wrap">
            {getLastThreeSentences(translation)}
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-2">
        <label className="text-sm text-gray-600">
          Show last 3 sentences only
        </label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={showLastThree}
            onChange={onToggleLastThree}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
}