import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  Star,
} from 'lucide-react';
import { destinations } from '../data';
import { GlassCard, SectionHeading } from '../components';
import { NotFound } from './NotFound';

export function DestinationDetails() {
  const { id } = useParams();
  const destination = destinations.find((item) => item.id === id);

  if (!destination) return <NotFound />;

  return (
    <main className="detail-page">
      <div
        className="detail-hero"
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="detail-hero-overlay" />
        <div className="detail-hero-copy">
          <span className="eyebrow">
            <MapPin /> {destination.country} · {destination.type}
          </span>
          <h1>
            {destination.name}
            <br />
            <em>is calling.</em>
          </h1>
          <p>{destination.description}</p>
          <Link to={`/booking?destination=${destination.id}`} className="btn btn-gold">
            Plan this escape <ArrowRight />
          </Link>
        </div>
      </div>
      <div className="detail-overview">
        <div>
          <span className="eyebrow">THE DESTINATION</span>
          <h2>
            Come for the view.
            <br />
            <em>Stay for the feeling.</em>
          </h2>
          <p>
            {destination.description} Discover the signature sights, local culture
            and slower moments that make {destination.name} worth the journey.
          </p>
        </div>
        <GlassCard className="destination-facts lightning-tile">
          <div>
            <CalendarDays />
            <span>Best time to visit</span>
            <b>{destination.best}</b>
          </div>
          <div>
            <Clock />
            <span>Suggested trip</span>
            <b>{destination.duration}</b>
          </div>
          <div>
            <Star />
            <span>Travel vibe</span>
            <b>{destination.type}</b>
          </div>
        </GlassCard>
      </div>
      <section className="section detail-attractions">
        <SectionHeading
          eyebrow="WORTH THE WANDER"
          title="A few places to fall for"
          subtitle="A starting point for your own destination discoveries."
        />
        <div className="attraction-list">
          {destination.attractions.map((attraction, index) => (
            <div key={attraction} className="lightning-tile">
              <span>0{index + 1}</span>
              <b>{attraction}</b>
              <MapPin />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
