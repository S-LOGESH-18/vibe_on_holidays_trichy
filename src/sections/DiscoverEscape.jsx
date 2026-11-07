import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { destinations, featuredEscapeIds } from '../data';
import { RiseIn, SectionHeading } from '../components';

export function DiscoverEscape() {
  const featured = featuredEscapeIds
    .map((id) => destinations.find((item) => item.id === id))
    .filter(Boolean);

  return (
    <section id="destinations" className="section destinations-section">
      <SectionHeading
        className="heading-bright"
        eyebrow="FEATURED DESTINATIONS"
        title={
          <>
            Discover your <em>next escape</em>
          </>
        }
        subtitle="Two picks each from Tamil Nadu, Kerala and Karnataka — hills, backwaters and royal cities."
      />
      <div className="featured-grid">
        {featured.map((item, index) => (
          <RiseIn key={item.id} delay={index * 0.08}>
            <Link to={`/destinations/${item.id}`} className="featured-card lightning-tile">
              <img src={item.image} alt={`${item.name}, ${item.country}`} />
              <div>
                <span className="place-tag">{item.country}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          </RiseIn>
        ))}
      </div>
      <div className="section-cta">
        <Link className="btn btn-outline" to="/destinations">
          View all destinations <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
