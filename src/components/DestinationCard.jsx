import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, MapPin, Star } from 'lucide-react';
import { imageFallback } from '../data';
import { RiseIn } from './RiseIn';

export function DestinationCard({ item, delay = 0 }) {
  const [fav, setFav] = useState(false);

  return (
    <RiseIn delay={delay}>
    <article className="destination-card lightning-tile">
      <Link to={`/destinations/${item.id}`} className="card-image">
        <img
          src={item.image}
          alt={`${item.name} landscape`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = imageFallback;
          }}
        />
        <span className="image-tag">{item.type}</span>
      </Link>
      <button
        className={`favorite ${fav ? 'active' : ''}`}
        onClick={() => setFav(!fav)}
        aria-label="Toggle favorite"
      >
        <Heart size={17} fill={fav ? 'currentColor' : 'none'} />
      </button>
      <div className="destination-content">
        <div className="card-meta">
          <span>
            <MapPin size={13} />
            {item.country}
          </span>
          <span>
            <Star size={13} fill="currentColor" />
            {item.rating}
          </span>
        </div>
        <Link to={`/destinations/${item.id}`}>
          <h3>{item.name}</h3>
        </Link>
        <p>{item.description}</p>
        <div className="card-bottom">
          <Link
            className="btn btn-gold book-now-btn"
            to={`/booking?destination=${item.id}`}
          >
            Book Now
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
    </RiseIn>
  );
}
