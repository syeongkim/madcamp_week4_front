// src/app/gages/magic/speech-recognition.d.ts

interface SpeechRecognition extends EventTarget {
  new (): SpeechRecognition;
  start(): void;
  stop(): void;
  abort(): void;
  readonly grammars: SpeechGrammarList;
  readonly lang: string;
  readonly continuous: boolean;
  readonly interimResults: boolean;
  readonly maxAlternatives: number;
  readonly onerror: (event: SpeechRecognitionErrorEvent) => void;
  readonly onresult: (event: SpeechRecognitionEvent) => void;
  readonly onsoundstart: (event: Event) => void;
  readonly onsoundend: (event: Event) => void;
  readonly onspeechstart: (event: Event) => void;
  readonly onspeechend: (event: Event) => void;
  readonly onstart: (event: Event) => void;
  readonly onend: (event: Event) => void;
}

interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string;
}

interface SpeechRecognitionEvent extends Event {
  readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  readonly isFinal: boolean;
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  readonly transcript: string;
  readonly confidence: number;
}

interface SpeechGrammarList {
  addFromURI(uri: string, weight: number): void;
  addFromString(grammar: string, weight: number): void;
  readonly length: number;
  item(index: number): SpeechGrammar;
}

interface SpeechGrammar {
  readonly weight: number;
}

interface Window {
  SpeechRecognition: typeof SpeechRecognition;
  webkitSpeechRecognition: typeof SpeechRecognition;
}
