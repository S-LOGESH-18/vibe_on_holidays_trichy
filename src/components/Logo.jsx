import { Link } from 'react-router-dom';
import { images, site } from '../data';

export function Logo({ small = false }) {
  return (
    <Link
      to="/"
      className={`brand ${small ? 'brand-small' : ''}`}
      aria-label={site.fullName}
    >
      <img
        className="brand-logo"
        src={images.logo}
        alt={site.fullName}
      />
      <span className="brand-name">{site.fullName}</span>
    </Link>
  );
}
