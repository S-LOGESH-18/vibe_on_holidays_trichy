import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  BedDouble,
  BusFront,
  Compass,
  Heart,
  Leaf,
  MapPin,
  Mountain,
  Phone,
  Users,
} from 'lucide-react';
import { images, site } from '../data';
import { RiseIn } from '../components';
import aboutContactImage from '../../image.png';

const services = [
  {
    title: 'Activities',
    icon: Activity,
    items: [
      'Off road Jeep Safari',
      'DJ campfire',
      'Trekking',
      'Theme park',
      'DJ Boating',
      'Adventure & Water Sport Activities',
    ],
  },
  {
    title: 'Accommodation',
    icon: BedDouble,
    items: [
      'Hotel',
      'Resort',
      'Cottage',
      'Tent Stay',
      'Camping',
      'House Boat Stay',
    ],
  },
  {
    title: 'Transport',
    icon: BusFront,
    items: [
      'DJ Floor Bus',
      'DJ Floor Coach',
      'Van',
      'Tempo',
      'Cab',
      'Jeep',
    ],
  },
];

export function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <img
          className="about-hero-img about-hero-img-desktop"
          src={images.fleetBanner}
          alt="Vibe On Holidays fleet"
        />
        <img
          className="about-hero-img about-hero-img-mobile"
          src={images.fleetMobile}
          alt="Vibe On Holidays fleet"
        />
        <div className="about-hero-shade" />
        <div className="about-hero-copy">
          <span className="eyebrow">
            <Leaf /> A LITTLE ABOUT US
          </span>
          <h1>
            VIBE ON HOLIDAYS
            <br />
            <em>TRICHY</em>
          </h1>
          <p>
            Feel the vibe, live the journey. Every trip becomes a beautiful
            memory.
          </p>
        </div>
      </section>

      <section className="about-body">
        <div className="about-content">
          <RiseIn className="about-mission-visual">
            <img
              src={images.logo}
              alt="Vibe On Holidays emblem"
            />
          </RiseIn>
          <RiseIn delay={0.12}>
            <span className="eyebrow">OUR MISSION</span>
            <h2>
              Your trip, your way.
              <br />
              <em>Made to be memorable.</em>
            </h2>
            <p>
              We are a young and dynamic team of tour operators who draw on our
              own travels and experiences to make your trip unique. We believe
              every tour should be customized around your expectations.
            </p>
            <div className="about-highlights">
              <span className="lightning-tile">
                <Compass size={16} /> Planned from real travel experience
              </span>
              <span className="lightning-tile">
                <Heart size={16} /> Customized around you
              </span>
              <span className="lightning-tile">
                <Users size={16} /> A dynamic team that cares
              </span>
              <span className="lightning-tile">
                <Mountain size={16} /> Adventure travel
              </span>
            </div>
            <Link className="btn btn-gold" to="/destinations">
              Find your escape <ArrowRight />
            </Link>
          </RiseIn>
        </div>

        <section className="about-journey">
          <RiseIn>
            <span className="eyebrow">OUR SERVICE</span>
            <h2>
              Everything for
              <br />
              <em>a great getaway.</em>
            </h2>
            <p>
              Choose the experiences, stay, and transport that make your
              holiday feel like yours.
            </p>
          </RiseIn>

          <div className="about-service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <RiseIn key={service.title} delay={index * 0.08}>
                  <article className="about-service-card lightning-tile">
                    <span className="about-service-icon">
                      <Icon size={22} />
                    </span>
                    <h3>{service.title}</h3>
                    <ul>
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </RiseIn>
              );
            })}
          </div>
        </section>

        <section className="about-contact">
          <RiseIn>
            <span className="eyebrow">EXPLORE WITH US</span>
            <h2>
              Let’s make your
              <br />
              <em>next trip a memory.</em>
            </h2>
            <p>Get in touch and let’s plan a journey that feels like you.</p>
            <div className="about-contact-details">
              <a href={`tel:${site.phoneTel}`}>
                <Phone size={18} />
                {site.phoneDisplay}
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer">
                <span aria-hidden="true">@</span>
                vibe_on_holidays_trichy
              </a>
              <span>
                <MapPin size={18} />
                No.1 Tollgate, Trichy
              </span>
            </div>
            <Link className="btn btn-gold" to="/contact">
              Plan your trip <ArrowRight />
            </Link>
          </RiseIn>
          <img
            className="about-contact-image"
            src={aboutContactImage}
            alt="Vibe On Holidays tour bus on the way to Kodaikanal"
          />
        </section>
      </section>
    </main>
  );
}
