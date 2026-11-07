import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Clock3,
  Compass,
  Heart,
  Leaf,
  MapPinned,
  Mountain,
  Route,
  Users,
} from 'lucide-react';
import { images, site } from '../data';
import { RiseIn } from '../components';

const journeyStats = [
  { value: '500+', label: 'Travellers', icon: Route },
  { value: '50+', label: 'Trips completed', icon: Compass },
  { value: '25+', label: 'Destinations', icon: MapPinned },
  { value: '24/7', label: 'Planning', icon: Clock3 },
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
            YOUR TRAVEL STORY
            <br />
            <em>STARTS HERE</em>
          </h1>
          <p>
            {site.tagline} — customised tour packages across the South region
            from Trichy, Dindigul, Thanjavur and Coimbatore.
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
              Make travel simple,
              <br />
              <em>enjoyable, and personalized.</em>
            </h2>
            <p>
              Our goal is to make travel planning simple, enjoyable, and
              personalized — whether you are looking for travel inspiration, a
              family holiday, a group tour, or an adventure into the wild.
            </p>
            <div className="about-highlights">
              <span className="lightning-tile">
                <Compass size={16} /> Travel inspiration
              </span>
              <span className="lightning-tile">
                <Heart size={16} /> Personalized holiday experiences
              </span>
              <span className="lightning-tile">
                <Users size={16} /> Group tours & family trips
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
            <span className="eyebrow">OUR JOURNEY</span>
            <h2>
              Miles covered.
              <br />
              <em>Memories made.</em>
            </h2>
            <p>
              From first enquiry to the last drop-off, we plan every trip so
              groups travel more, worry less, and vibe best.
            </p>
          </RiseIn>

          <div className="about-stats">
            {journeyStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <RiseIn key={stat.label} delay={index * 0.08}>
                  <article className="about-stat-card lightning-tile">
                    <span className="about-stat-icon">
                      <Icon size={22} />
                    </span>
                    <b>{stat.value}</b>
                    <span>{stat.label}</span>
                  </article>
                </RiseIn>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
