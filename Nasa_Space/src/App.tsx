import { useEffect, useState } from 'react';
import { artifacts } from './data/artifacts';
import './styles.css';

type Chapter = {
  id: string;
  number: string;
  title: string;
  text: string;
  fact: string;
  label: string;
  world: 'moon' | 'mars' | 'space';
};

const chapters: Chapter[] = [
  { id: 'arrival', number: '01', title: 'We came to look closer.', text: 'Every machine began as a question: what is this world made of, and what can it teach us about our own?', fact: 'The Moon keeps a record of impacts and exploration because it has no thick atmosphere to erase the marks.', label: 'THE FIRST QUESTION', world: 'space' },
  { id: 'moon', number: '02', title: 'Then we left weight behind.', text: 'A descent stage. A rover. A mirror that still catches a laser from Earth. The Moon keeps these things exactly where we placed them.', fact: 'Apollo astronauts used lunar rovers on Apollo 15, Apollo 16 and Apollo 17 to travel farther from their landing modules.', label: 'THE MOON / 384,400 KM', world: 'moon' },
  { id: 'mars', number: '03', title: 'On Mars, silence arrived slowly.', text: 'Spirit became still in the soil. Opportunity waited through a planet-wide dust storm. InSight listened until its solar panels gathered too much dust.', fact: 'Opportunity worked for more than 14 years before a global dust storm ended communications in 2018.', label: 'MARS / 225 MILLION KM', world: 'mars' },
  { id: 'record', number: '04', title: 'A quiet object can still teach us.', text: 'From orbit, our tracks are handwriting. Hardware, wheel paths and instruments become a record of how we learned to travel across another world.', fact: 'NASA’s Lunar Reconnaissance Orbiter has photographed Apollo landing sites and the equipment left below.', label: 'THE ORBITAL RECORD', world: 'space' },
  { id: 'future', number: '05', title: 'The next story is ours to choose.', text: 'Exploration is not only arriving. It is choosing how to leave a place after you have learned from it.', fact: 'AFTERLIGHT distinguishes operational instruments, inactive machines and deliberately discarded landing hardware.', label: 'A PROMISE', world: 'moon' }
];

function App() {
  const [started, setStarted] = useState(false);
  const [active, setActive] = useState(chapters[0].id);
  const [selectedArtifact, setSelectedArtifact] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id.replace('step-', ''));
      });
    }, { threshold: 0.55 });
    document.querySelectorAll('.story-step').forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, [started]);

  const activeChapter = chapters.find((chapter) => chapter.id === active) ?? chapters[0];
  const activeIndex = chapters.findIndex((chapter) => chapter.id === active);
  const next = chapters[activeIndex + 1];

  return <div className={`afterlight ${started ? 'is-started' : ''}`}>
    {!started && <Cover onStart={() => { setStarted(true); setTimeout(() => document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' }), 20); }} />}
    <button className="nasa-badge" onClick={() => window.open('https://www.nasa.gov/', '_blank', 'noopener,noreferrer')} aria-label="Open NASA website"><span>NASA</span><small>MISSION<br />ARCHIVE</small></button>
    <header className="story-header"><button className="wordmark" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>AFTERLIGHT <span>Every mission ends. Its story doesn't.</span></button><span>{activeChapter.number} / 05</span></header>
    <div className="chapter-title">{activeChapter.title}</div>
    <main id="story" className="story">
      <div className={`fixed-scene scene-${activeChapter.world}`} aria-hidden="true"><div className="scene-stars" /><div className="scene-orbit orbit-a" /><div className="scene-orbit orbit-b" /><div className="scene-planet" /><div className="scene-horizon" /><div className="scene-object object-rover" /><div className="scene-object object-module" /><div className="scene-object object-helicopter" /><div className="scene-caption">{activeChapter.label}</div></div>
      <div className="story-column">
        <section className="story-intro"><span>AFTERLIGHT / A FIELD GUIDE</span><h1>What remains<br /><em>after the mission?</em></h1><p>Scroll to explore the machines humans left on the Moon and Mars.</p><span className="scroll-cue">SCROLL TO BEGIN ↓</span></section>
        {chapters.map((chapter) => <section className="story-step" id={`step-${chapter.id}`} key={chapter.id}><div className="step-card"><span className="step-number">{chapter.number} / 05</span><h2>{chapter.title}</h2><p>{chapter.text}</p><div className="step-fact"><span>{chapter.label}</span><strong>{chapter.fact}</strong></div>{chapter.id === 'moon' && <button className="discover-button" onClick={() => setSelectedArtifact('apollo-15-lrv')}>Open the lunar archive ↗</button>}{chapter.id === 'mars' && <button className="discover-button" onClick={() => setSelectedArtifact('opportunity')}>Meet the quiet machines ↗</button>}</div></section>)}
        <section className="story-end"><span>THE ARCHIVE CONTINUES</span><h2>Look up.<br /><em>Remember.</em></h2><p>Explore twelve verified starting points in the AFTERLIGHT collection.</p><button className="discover-button" onClick={() => setSelectedArtifact(artifacts[0].id)}>Open an artifact ↗</button><footer>TEAM NORTH-SOUTH / NASA SPACE APPS 2026 <span>NOT ENDORSED BY NASA</span></footer></section>
      </div>
      <div className="story-progress">{chapters.map((chapter) => <button key={chapter.id} className={chapter.id === active ? 'active' : ''} onClick={() => document.querySelector(`#step-${chapter.id}`)?.scrollIntoView({ behavior: 'smooth' })}>{chapter.number}</button>)}</div>
    </main>
    {selectedArtifact && <ArtifactOverlay id={selectedArtifact} onClose={() => setSelectedArtifact(null)} />}
    {next && <span className="next-hint">NEXT / {next.number} · {next.title}</span>}
  </div>;
}

function Cover({ onStart }: { onStart: () => void }) {
  return <section className="cover"><div className="cover-noise" /><div className="cover-copy"><span className="cover-kicker">NASA SPACE APPS / 2026</span><h1>Every mission ends.<br /><em>Its story doesn't.</em></h1><p>Explore the things humanity left behind on the Moon and Mars.</p><button onClick={onStart}>BEGIN THE ARCHIVE <span>→</span></button><small>Best experienced by scrolling slowly.</small></div><div className="cover-moon" /><div className="cover-footer"><span>AFTERLIGHT</span><span>A DIGITAL MUSEUM OF WHAT REMAINS</span></div></section>;
}

function ArtifactOverlay({ id, onClose }: { id: string; onClose: () => void }) {
  const artifact = artifacts.find((item) => item.id === id);
  if (!artifact) return null;
  return <div className="artifact-overlay"><article><button className="overlay-close" onClick={onClose}>×</button><span className="cover-kicker">{artifact.destination} / {artifact.status}</span><h2>{artifact.name}</h2><p className="overlay-lede">{artifact.reason}</p><div className="overlay-grid"><div><span>PURPOSE</span><p>{artifact.purpose}</p></div><div><span>SCIENCE</span><p>{artifact.science}</p></div><div><span>LOCATION</span><p>{artifact.location}</p></div><div><span>MISSION</span><p>{artifact.mission}</p></div></div><div className="overlay-sources">{artifact.references.map((reference) => <a href={reference.url} target="_blank" rel="noreferrer" key={reference.url}>{reference.label} ↗</a>)}</div></article></div>;
}

export default App;
