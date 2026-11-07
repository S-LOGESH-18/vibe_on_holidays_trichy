import { images } from '../data';
import { GlassCard, RiseIn, SectionHeading } from '../components';

const packages = [
  {
    image: images.collegeIv,
    title: 'College I.V',
    caption: 'Campus energy, handled.',
    subcaption:
      'DJ-ready buses, stays and routes built for unforgettable industrial visits.',
  },
  {
    image: images.schoolTour,
    title: 'School Tour',
    caption: 'Safe days. Big memories.',
    subcaption:
      'Well-paced educational trips with comfortable travel and careful group planning.',
  },
  {
    image: images.corporateTour,
    title: 'Corporate Tour',
    caption: 'Teams, off the clock.',
    subcaption:
      'Smooth itineraries for offsites, bonding trips and company getaways.',
  },
  {
    image: images.friendsTour,
    title: 'Friends Tour',
    caption: 'Squad trips with vibe.',
    subcaption:
      'Music, stays and scenic routes so the whole crew travels in one rhythm.',
  },
  {
    image: images.familyTour,
    title: 'Family Tour',
    caption: 'Everyone together.',
    subcaption:
      'Comfortable group travel and easy pacing for parents, kids and elders.',
  },
  {
    image: images.devotionalTour,
    title: 'Devotional Tour',
    caption: 'Faith, with ease.',
    subcaption:
      'Temple circuits and heritage routes planned with rest, timing and care.',
  },
];

export function JourneyPassion() {
  return (
    <section id="packages" className="why-section">
      <div className="why-bg" />
      <SectionHeading
        light
        eyebrow="OUR PACKAGES"
        title="Your journey. Our passion."
        subtitle="Customised tours across the South — pick the vibe, we plan the rest."
      />
      <div className="feature-grid feature-grid-six">
        {packages.map((item, index) => (
          <RiseIn key={item.title} delay={index * 0.08}>
            <GlassCard className="feature-card package-tile lightning-tile">
              <img src={item.image} alt={item.title} />
              <div className="package-tile-body">
                <h3>{item.title}</h3>
                <p className="feature-caption">{item.caption}</p>
                <p className="feature-sub">{item.subcaption}</p>
              </div>
            </GlassCard>
          </RiseIn>
        ))}
      </div>
    </section>
  );
}
