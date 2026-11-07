import { Sparkles } from 'lucide-react';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  className = '',
  icon: Icon = Sparkles,
}) {
  return (
    <div className={`section-heading ${light ? 'light' : ''} ${className}`.trim()}>
      <span className="eyebrow">
        {Icon ? <Icon size={14} /> : null}
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
