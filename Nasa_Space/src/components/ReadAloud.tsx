import { useEffect, useState } from 'react';

type Props = { title: string; lines: string[]; narrator: string };

export function ReadAloud({ title, lines, narrator }: Props) {
  const [reading, setReading] = useState(false);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  const toggle = () => {
    if (!('speechSynthesis' in window)) return;
    if (reading) {
      window.speechSynthesis.cancel();
      setReading(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(`${title}. ${narrator} ${lines.join(' ')}`);
    utterance.rate = 0.88;
    utterance.pitch = 0.96;
    utterance.onend = () => setReading(false);
    utterance.onerror = () => setReading(false);
    window.speechSynthesis.speak(utterance);
    setReading(true);
  };

  return <button className="read-aloud" onClick={toggle} aria-pressed={reading}>
    <span>{reading ? '■' : '▶'}</span> {reading ? 'Stop reading' : 'Read this act'}
  </button>;
}
