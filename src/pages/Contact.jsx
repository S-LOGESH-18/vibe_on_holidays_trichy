import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { FaInstagram, FaPhone } from 'react-icons/fa';
import { images, site, whatsappUrl } from '../data';
import { BookingForm } from '../components';

export function Contact() {
  return (
    <main className="booking-page contact-page">
      <div className="booking-intro">
        <img
          className="contact-logo"
          src={images.logo}
          alt={`${site.fullName} logo`}
        />
        <span className="eyebrow">
          <MessageCircle size={14} /> SAY HELLO
        </span>
        <h1>
          Let's talk
          <br />
          <em>travel.</em>
        </h1>
        <p>
          {site.tagline}
          <br />
          {site.slogan} — DM for bookings on WhatsApp or Instagram.
        </p>
        <div className="contact-links">
          <a href={`tel:${site.phoneTel}`}>
            <Phone /> {site.phoneDisplay}
          </a>
          <a href={whatsappUrl()}>
            <FaPhone /> WhatsApp {site.phoneDisplay}
          </a>
          <a href={site.instagram} target="_blank" rel="noreferrer">
            <FaInstagram /> {site.instagramHandle}
          </a>
          <span>
            <MapPin /> {site.serviceAreas}
          </span>
        </div>
      </div>
      <BookingForm />
    </main>
  );
}
