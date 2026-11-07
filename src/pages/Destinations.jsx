import { Leaf } from 'lucide-react';
import { destinations } from '../data';
import { DestinationCard, SectionHeading } from '../components';

const regions = [
  {
    name: 'Tamil Nadu',
    subtitle:
      'Discover misty hill stations, beautiful coastlines, and memorable escapes across Tamil Nadu.',
  },
  {
    name: 'Kerala',
    subtitle:
      'Explore peaceful backwaters, green tea hills, waterfalls, and the many moods of Kerala.',
  },
  {
    name: 'Karnataka',
    subtitle:
      'Find coffee country, lively cities, lush forests, and Western Ghats adventures.',
  },
];

export function Destinations() {
  return (
    <main className="inner-page destinations-page">
      <div className="inner-hero">
        <span className="eyebrow">
          <Leaf /> THE WORLD IS CALLING
        </span>
        <h1>
          Find your <em>somewhere.</em>
        </h1>
        <p>Explore Tamil Nadu, Kerala, and Karnataka—your next getaway awaits.</p>
      </div>

      {regions.map((region) => {
        const regionalDestinations = destinations.filter(
          (destination) => destination.country === region.name,
        );

        return (
          <section
            className="section destination-region"
            key={region.name}
            aria-label={`Explore ${region.name} destinations`}
          >
            <SectionHeading
              eyebrow="EXPLORE WITH US"
              title={`Explore ${region.name}`}
              subtitle={region.subtitle}
            />
            <div className="destination-grid">
              {regionalDestinations.map((item, index) => (
                <DestinationCard
                  key={item.id}
                  item={item}
                  delay={(index % 6) * 0.06}
                />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
