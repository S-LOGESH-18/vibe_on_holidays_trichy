import {
  DiscoverEscape,
  Hero,
  JourneyPassion,
  PlanBooking,
  TravelSafe,
} from '../sections';

export function Home() {
  return (
    <main className="home-page">
      <Hero />
      <JourneyPassion />
      <DiscoverEscape />
      <TravelSafe />
      <PlanBooking />
    </main>
  );
}
