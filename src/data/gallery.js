import photo01 from '../assets/gallery/01.jpg';
import photo02 from '../assets/gallery/02.jpg';
import photo03 from '../assets/gallery/03.jpg';
import photo04 from '../assets/gallery/04.jpg';
import photo05 from '../assets/gallery/05.jpg';
import photo06 from '../assets/gallery/06.jpg';
import photo07 from '../assets/gallery/07.jpg';
import photo08 from '../assets/gallery/08.jpg';
import photo09 from '../assets/gallery/09.jpg';
import photo10 from '../assets/gallery/10.jpg';
import photo11 from '../assets/gallery/11.jpg';
import photo12 from '../assets/gallery/12.jpg';
import photo13 from '../assets/gallery/13.jpg';
import photo14 from '../assets/gallery/14.jpg';
import photo15 from '../assets/gallery/15.jpg';

const captions = [
  'Memories made on the move',
  'Every mile brings a new moment',
  'Good days begin with a journey',
  'Roads lead to stories',
  'Make room for another adventure',
  'A journey worth remembering',
  'Every stop has its own charm',
  'Take the scenic route',
  'The moments between destinations',
  'New views, lasting memories',
  'Together is a great place to go',
  'Travel well, remember more',
  'The road is part of the story',
  'Let the journey unfold',
  'More memories along the way',
];

export const galleryImages = [
  photo01,
  photo02,
  photo03,
  photo04,
  photo05,
  photo06,
  photo07,
  photo08,
  photo09,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
].map((src, index) => ({
  id: `gallery-photo-${index + 1}`,
  src,
  label: `Photo ${String(index + 1).padStart(2, '0')}`,
  caption: captions[index],
}));
