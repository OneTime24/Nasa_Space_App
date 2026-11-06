import { motion } from 'framer-motion';
import type { Act } from '../data/story';
import { ReadAloud } from './ReadAloud';
import { SceneArt } from './SceneArt';

type Props = { act: Act; selectedFact: number; onSelectFact: (index: number) => void; onNext: () => void };
export function Act({ act, selectedFact, onSelectFact, onNext }: Props) {
  const fact = act.facts[selectedFact];
  return <section className={`act act-${act.tone}`} id={`act-${act.id}`} aria-labelledby={`act-${act.id}-title`}>
    <div className="act-heading"><span>ACT {act.id} / V</span><span>{act.subtitle}</span></div>
    <div className="act-layout">
      <motion.div className="narration" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .8 }}>
        <p className="eyebrow">The things you left behind say:</p><h2 id={`act-${act.id}-title`}>{act.title}</h2><p className="narrator">{act.narrator}</p>
        <div className="story-lines">{act.lines.map((line) => <p key={line}>{line}</p>)}</div>
        <ReadAloud title={act.title} narrator={act.narrator} lines={act.lines} />
        <div className="fact-card" aria-live="polite"><span className="fact-label">{fact.label}</span><h3>{fact.title}</h3><p>{fact.body}</p><a href={fact.source} target="_blank" rel="noreferrer">Read the NASA source ↗</a></div>
      </motion.div>
      <SceneArt tone={act.tone} selectedFact={selectedFact} onSelect={onSelectFact} />
    </div>
    <button className="next-act" onClick={onNext} aria-label="Continue to next act">Continue <span>↓</span></button>
  </section>;
}
