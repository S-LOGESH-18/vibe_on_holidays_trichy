import fleetBanner from '../assets/updated.png';
import fleetMobile from '../assets/fleet-mobile-updated.jpg';
import comfortableTravelImg from '../assets/safe_travel_bus.png';
import groupExperienceImg from '../assets/group_image.png';
import safeTravelImg from '../assets/safe_travel.png';
import brandLogo from '../assets/updated-icon.png';

export function wikiImage(file, width = 1200) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;
}

export const imageFallback = wikiImage('Munnar tea plantations.jpg');

export const images = {
  hero: wikiImage('HouseBoat from Alappuzha Vembanad Kayal.jpg', 2000),
  forest: wikiImage('Tea Plantations in Valparai Plateau.jpg', 1800),
  boat: wikiImage('HouseBoat from Alappuzha Vembanad Kayal.jpg'),
  fleetBanner,
  fleetMobile,
  collegeIv:
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85',
  schoolTour:
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=85',
  corporateTour:
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85',
  friendsTour:
    'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=900&q=85',
  familyTour:
    'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85',
  devotionalTour: wikiImage('Madurai Meenakshi Amman Temple Gopuram.jpg'),
  comfortableTravel: comfortableTravelImg,
  luxuryStays:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85',
  groupExperience: groupExperienceImg,
  expertDrivers:
    'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=85',
  safeTravel: safeTravelImg,
  support:
    'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=900&q=85',
  logo: brandLogo,
};
