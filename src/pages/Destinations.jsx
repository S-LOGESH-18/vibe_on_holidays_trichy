import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Compass, Leaf, Search } from 'lucide-react';
import { destinations, karnatakaDestinations } from '../data';
import { DestinationCard, SectionHeading } from '../components';

export function Destinations() {
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get('destination') || '');
  const incomingType = params.get('type');
  const [type, setType] = useState(
    !incomingType || incomingType === 'Any vibe' ? 'All' : incomingType,
  );
  const [max, setMax] = useState('100000');

  const filtered = destinations.filter(
    (item) =>
      (!query ||
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.country.toLowerCase().includes(query.toLowerCase()) ||
        item.id.toLowerCase().includes(query.toLowerCase())) &&
      (type === 'All' || item.type === type) &&
      item.price <= Number(max),
  );

  return (
    <main className="inner-page">
      <div className="inner-hero">
        <span className="eyebrow">
          <Leaf /> THE WORLD IS CALLING
        </span>
        <h1>
          Find your <em>somewhere.</em>
        </h1>
        <p>Small escapes, big adventures, and places that stay with you.</p>
      </div>

      <section className="section karnataka-section">
        <SectionHeading
          eyebrow="SOUTH INDIA CALLING"
          title="Explore Karnataka"
          subtitle="Misty mountains, lush forests, coffee plantations, wildlife, and unforgettable adventures."
        />
        <div className="destination-grid">
          {karnatakaDestinations.map((item, index) => (
            <DestinationCard key={item.id} item={item} delay={index * 0.06} />
          ))}
        </div>
      </section>

      <div className="filter-bar lightning-tile">
        <label>
          <Search />
          <input
            placeholder="Search destinations"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <select value={type} onChange={(event) => setType(event.target.value)}>
          {['All', 'Beach', 'Adventure', 'Nature', 'Luxury'].map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <select value={max} onChange={(event) => setMax(event.target.value)}>
          <option value="100000">Any budget</option>
          <option value="20000">Under ₹20,000</option>
          <option value="30000">Under ₹30,000</option>
          <option value="40000">Under ₹40,000</option>
          <option value="60000">Under ₹60,000</option>
        </select>
        <span>{filtered.length} escapes</span>
      </div>
      <SectionHeading
        className="heading-bright"
        eyebrow="ALL DESTINATIONS"
        title={
          <>
            Discover your <em>next escape</em>
          </>
        }
        subtitle="Hills, forests, backwaters and beaches across South India."
      />
      {filtered.length ? (
        <div className="destination-grid">
          {filtered.map((item, index) => (
            <DestinationCard key={item.id} item={item} delay={(index % 6) * 0.06} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Compass />
          <h3>No escapes found</h3>
          <p>Try another destination, vibe or budget.</p>
          <button
            className="btn btn-outline"
            onClick={() => {
              setQuery('');
              setType('All');
              setMax('100000');
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </main>
  );
}
