import { images } from '../data';
import { GlassCard, RiseIn, SectionHeading } from '../components';

const promises = [
  {
    image: images.comfortableTravel,
    title: 'Comfortable Travel',
    text: 'Travel in premium AC vehicles with pushback seats and spacious interiors for a journey as enjoyable as the destination.',
  },
  {
    image: images.luxuryStays,
    title: 'Luxury Stays',
    text: 'Handpicked hotels and resorts that offer world-class amenities, stunning views, and the highest standards of hospitality.',
  },
  {
    image: images.groupExperience,
    title: 'Group Experience',
    text: 'Specially designed group packages with spacious Tempo Travellers, team activities, and shared memories that last forever.',
  },
  {
    image: images.expertDrivers,
    title: 'Expert Drivers',
    text: 'Professional, experienced, and courteous drivers who know every route, ensuring your safety and comfort throughout the trip.',
  },
  {
    image: images.safeTravel,
    title: 'Safe Travel',
    text: 'Your safety is our top priority. Well-maintained vehicles, verified drivers, and comprehensive travel insurance on every trip.',
  },
  {
    image: images.support,
    title: '24/7 Support',
    text: 'Round-the-clock customer support to assist you at every step. From planning to return, we are just a phone call away.',
  },
];

export function TravelSafe() {
  return (
    <section id="travel-safe" className="section fleet-section">
      <SectionHeading
        eyebrow="TRAVEL SAFE"
        title="Travel safe"
        subtitle="Comfort, luxury stays, expert drivers and 24/7 support — so you can focus on the vibe."
      />
      <div className="feature-grid feature-grid-six">
        {promises.map((item, index) => (
          <RiseIn key={item.title} delay={index * 0.08}>
            <GlassCard
              className={`feature-card package-tile lightning-tile${item.title === 'Group Experience' ? ' package-tile-group' : ''}`}
            >
              <img src={item.image} alt={item.title} />
              <div className="package-tile-body">
                <h3>{item.title}</h3>
                <p className="feature-sub">{item.text}</p>
              </div>
            </GlassCard>
          </RiseIn>
        ))}
      </div>
    </section>
  );
}
