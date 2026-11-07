import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { site, whatsappUrl } from '../data';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo />
          <p>
            {site.tagline}
            <br />
            {site.slogan}
            <br />
            {site.serviceAreas}
          </p>
          <div className="socials">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a href={whatsappUrl()} aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to={{ pathname: '/', hash: 'plan' }}>Book</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Popular Tours</h4>
          <Link to="/destinations/ooty">Ooty</Link>
          <Link to="/destinations/munnar">Munnar</Link>
          <Link to="/destinations/kodaikanal">Kodaikanal</Link>
          <Link to="/destinations/alleppey">Alleppey</Link>
          <Link to="/destinations/coorg">Coorg</Link>
          <Link to="/destinations/dandeli">Dandeli</Link>
        </div>
        <div>
          <h4>Contact Us</h4>
          <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          <a href={whatsappUrl()}>WhatsApp Booking</a>
          <a href={site.instagram} target="_blank" rel="noreferrer">
            {site.instagramHandle}
          </a>
          <span className="footer-note">{site.serviceAreas}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </span>
        <span>{site.tagline}</span>
      </div>
      <a className="wa-float" href={whatsappUrl()} aria-label="Chat on WhatsApp">
        <FaWhatsapp />
      </a>
    </footer>
  );
}
