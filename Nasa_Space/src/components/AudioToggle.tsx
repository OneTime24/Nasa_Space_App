import { useEffect, useRef, useState } from 'react';

export function AudioToggle() {
  const [on, setOn] = useState(false);
  const oscillator = useRef<OscillatorNode | null>(null);
  const gain = useRef<GainNode | null>(null);
  useEffect(() => () => { oscillator.current?.stop(); }, []);
  const toggle = () => {
    if (on) { gain.current?.gain.exponentialRampToValueAtTime(.0001, (gain.current.context.currentTime || 0) + .4); setOn(false); return; }
    const context = new AudioContext();
    const nextGain = context.createGain();
    const nextOscillator = context.createOscillator();
    nextOscillator.type = 'sine'; nextOscillator.frequency.value = 110; nextGain.gain.value = .018;
    nextOscillator.connect(nextGain).connect(context.destination); nextOscillator.start();
    oscillator.current = nextOscillator; gain.current = nextGain; setOn(true);
  };
  return <button className="audio-toggle" onClick={toggle} aria-pressed={on} aria-label={on ? 'Mute ambient sound' : 'Play ambient sound'}><span>{on ? '◉' : '○'}</span> {on ? 'Sound on' : 'Sound off'}</button>;
}
