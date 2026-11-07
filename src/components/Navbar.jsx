import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const links = [
  ['Home', '/'],
  ['Destinations', '/destinations'],
  ['About', '/about'],
  ['Gallery', '/gallery'],
  ['Book', '/booking'],
  ['Contact', '/contact'],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Logo />
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(([name, path]) =>
            path.includes('#') ? (
              <Link
                key={name}
                to={{ pathname: '/', hash: path.split('#')[1] }}
                onClick={() => setOpen(false)}
              >
                {name}
              </Link>
            ) : (
              <NavLink
                key={name}
                to={path}
                end={path === '/'}
                onClick={() => setOpen(false)}
              >
                {name}
              </NavLink>
            ),
          )}
        </nav>
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
