import type { ActId } from '../data/story';
type Props = { active: ActId; onSelect: (id: ActId) => void };
export function ProgressNav({ active, onSelect }: Props) {
  return <nav className="progress-nav" aria-label="Story acts">{(['I', 'II', 'III', 'IV', 'V'] as ActId[]).map((id) => <button key={id} className={active === id ? 'active' : ''} onClick={() => onSelect(id)} aria-label={`Go to Act ${id}`} aria-current={active === id ? 'step' : undefined}><span>{id}</span></button>)}</nav>;
}
