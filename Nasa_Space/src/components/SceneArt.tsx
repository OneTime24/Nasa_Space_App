import { useMemo } from 'react';

type Props = { tone: string; selectedFact: number; onSelect: (index: number) => void };

export function SceneArt({ tone, selectedFact, onSelect }: Props) {
  const stars = useMemo(() => Array.from({ length: 34 }, (_, index) => ({
    left: `${(index * 37) % 100}%`, top: `${(index * 61) % 100}%`, delay: `${(index % 7) * .25}s`
  })), []);
  return (
    <div className={`scene-art scene-${tone}`} aria-label={`${tone} illustrated scene`}>
      <div className="stars">{stars.map((star, index) => <i key={index} style={star} />)}</div>
      <div className="horizon" />
      {tone === 'dawn' && <><div className="sun-disc" /><div className="girl"><span /></div></>}
      {tone === 'lunar' && <><div className="moon-sphere" /><div className="lunar-module" /><div className="rover"><button onClick={() => onSelect(0)} aria-label="Explore the lunar rover">▰</button></div><button className="fact-marker mirror" onClick={() => onSelect(1)} aria-label="Explore the lunar laser reflector">✦</button><button className="fact-marker plaque" onClick={() => onSelect(2)} aria-label="Explore the Apollo 17 plaque">▤</button></>}
      {tone === 'mars' && <><div className="mars-sphere" /><div className="mars-rover"><button onClick={() => onSelect(0)} aria-label="Explore Spirit">◆</button></div><button className="fact-marker mars-opportunity" onClick={() => onSelect(1)} aria-label="Explore Opportunity">✦</button><button className="fact-marker insight" onClick={() => onSelect(2)} aria-label="Explore InSight">⌂</button></>}
      {tone === 'archive' && <><div className="orbit-moon" /><div className="orbit-ring" /><div className="orbit-camera"><button onClick={() => onSelect(0)} aria-label="Zoom from lunar orbit">⌾</button></div><div className="track-line" /></>}
      {tone === 'gold' && <><div className="future-moon" /><div className="girl small"><span /></div><div className="pack"><button onClick={() => onSelect(selectedFact === 0 ? 1 : 0)} aria-label="Choose what to carry">+</button></div></>}
      <div className="scene-vignette" />
    </div>
  );
}
