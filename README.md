# Real-time Speech Transcription and Translation

A Next.js application that performs real-time speech transcription and translation using OpenAI's models. This app captures live audio input, provides real-time transcription, and simultaneously translates the content into your selected target language.

## Features

- 🎤 Live audio capture and transcription
- 🌍 Real-time translation to multiple languages
- 🔄 Automatic text cleanup option (keep last 3 sentences)
- 💻 Clean, modern user interface
- 🎯 Support for 10+ target languages

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 16.8 or later
- npm or yarn package manager
- A modern web browser with microphone support
- An OpenAI API key (for production use)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd speech-transcription-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:
```env
OPENAI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Select your target translation language from the dropdown menu.
2. Click the "Start Recording" button to begin capturing audio.
3. Speak clearly into your microphone.
4. The app will display the original transcription on the left and the translation on the right.
5. Toggle the "Keep only last 3 sentences" switch to manage text length.
6. Click "Stop Recording" when finished.

## Supported Languages

- English (en)
- Spanish (es)
- French (fr)
- German (de)
- Italian (it)
- Portuguese (pt)
- Russian (ru)
- Japanese (ja)
- Korean (ko)
- Chinese (zh)

## Technical Details

This application is built with:
- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- OpenAI API
- Web Audio API
- React Icons

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the speech-to-text and translation APIs
- Next.js team for the excellent framework
- All contributors and users of this application