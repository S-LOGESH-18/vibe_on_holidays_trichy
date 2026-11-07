import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { images, site } from '../data';
import busBackground from '../../bg_bus.png';

export function Hero() {
  return (
    <section className="hero hero-fleet">
      <img
        className="hero-fleet-img hero-fleet-img-desktop"
        src={images.fleetBanner}
        alt="Vibe On Holidays fleet"
      />
      <img
        className="hero-fleet-img hero-fleet-img-mobile"
        src={busBackground}
        alt="Vibe On Holidays fleet"
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="hero-copy">
          <div className="hero-badge">{site.role.toUpperCase()}</div>
          <h1 className="hero-quote">{site.quote}</h1>
          <p className="hero-slide-sub">
            College · School · Corporate · Family · Friends · Devotional
          </p>
          <p>
            {site.packagesLine}
            <br />
            {site.serviceAreas}
          </p>
          <div className="hero-buttons">
            <Link className="btn btn-gold" to="/destinations">
              Explore Destinations
            </Link>
            <Link className="btn btn-glass" to="/booking">
              <FaWhatsapp /> Book on WhatsApp
            </Link>
            <a
              className="btn btn-glass"
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
