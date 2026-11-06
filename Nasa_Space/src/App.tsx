import { useEffect, useState } from 'react';
import { Act } from './components/Act';
import { AudioToggle } from './components/AudioToggle';
import { ProgressNav } from './components/ProgressNav';
import { acts, type ActId } from './data/story';
import './styles.css';

function App() {
  const [started, setStarted] = useState(false);
  const [active, setActive] = useState<ActId>('I');
  const [fact, setFact] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive((entry.target.id.replace('act-', '') || 'I') as ActId);
        setFact(0);
      }
    }), { threshold: .35 });
    document.querySelectorAll('.act').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (id: ActId) => {
    setStarted(true);
    document.querySelector(`#act-${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return <div className="app">
    {!started && <div className="loading"><div className="loading-mark">✦</div><p>Preparing the field guide...</p></div>}
    <header className="site-header">
      <a href="#title" className="logo" onClick={() => setStarted(true)}><span>AB</span> ABANDONED<br />BUT NOT FORGOTTEN</a>
      <div className="header-right"><AudioToggle /><span className="header-note">NASA SPACE APPS / 2026</span></div>
    </header>
    <ProgressNav active={active} onSelect={goTo} />
    <main>
      <section className="title-screen" id="title">
        <div className="title-stars" />
        <div className="title-copy">
          <p className="eyebrow">An interactive story about what remains</p>
          <h1>Abandoned<br /><em>but not</em><br />forgotten.</h1>
          <p className="tagline">We left more than footprints.</p>
          <button className="begin-button" onClick={() => { setStarted(true); document.querySelector('#act-I')?.scrollIntoView({ behavior: 'smooth' }); }}>Begin the story <span>→</span></button>
          <p className="best-with">Best with sound. Scroll or tap to continue.</p>
        </div>
        <div className="title-planet"><div className="planet-moon" /><div className="tiny-orbit" /><span>THE MOON / 384,400 KM</span></div>
        <div className="title-scroll">SCROLL TO EXPLORE <b>↓</b></div>
      </section>
      {acts.map((act, index) => <Act key={act.id} act={act} selectedFact={fact} onSelectFact={setFact} onNext={() => index < acts.length - 1 ? goTo(acts[index + 1].id) : document.querySelector('#credits')?.scrollIntoView({ behavior: 'smooth' })} />)}
      <section className="credits" id="credits">
        <p className="eyebrow">The end is another beginning</p>
        <h2>Look up.<br /><em>Remember.</em></h2>
        <p className="credits-copy">These machines are heritage, science, and memory. This independent project was made for the NASA International Space Apps Challenge.</p>
        <div className="credits-actions"><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Replay story ↗</button><button onClick={() => { if (navigator.share) navigator.share({ title: document.title, url: window.location.href }); else navigator.clipboard?.writeText(window.location.href); }}>Share this story ↗</button></div>
        <div className="source-list"><strong>Sources & credits</strong><a href="https://science.nasa.gov/moon/" target="_blank" rel="noreferrer">NASA Moon</a><a href="https://science.nasa.gov/mission/mer-opportunity/" target="_blank" rel="noreferrer">NASA Mars Exploration Rover: Opportunity</a><a href="https://science.nasa.gov/mission/insight/" target="_blank" rel="noreferrer">NASA InSight</a><a href="https://www.nasa.gov/mission_pages/LRO/news/apollo-sites.html" target="_blank" rel="noreferrer">NASA LRO Apollo sites</a></div>
        <footer><span>[TEAM NAME] / [MEMBERS]</span><span>ABANDONED BUT NOT FORGOTTEN © 2026</span><span>NOT ENDORSED BY NASA</span></footer>
      </section>
    </main>
  </div>;
}

export default App;
