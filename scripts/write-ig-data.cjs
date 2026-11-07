const fs = require('fs');
const path = require('path');
const posts = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'ig-posts.json'), 'utf8'),
);

function classify(post) {
  const head = post.caption.split('\n').slice(0, 8).join(' ').toLowerCase();
  if (head.includes('interior') || head.includes('vibe machine')) return 'intro';
  if (post.type === 'video') return 'videos';
  if (head.includes('aasi_bus') || head.includes('bus service')) return 'bus';
  if (head.includes('thulasi') || head.includes('travels')) return 'tempo';
  if (head.includes('transports') || head.includes('tranzz')) return 'trips';
  return 'trips';
}

function titleFrom(caption) {
  const line = caption
    .split('\n')
    .map((s) => s.trim())
    .find((s) => s && s !== '.' && !s.startsWith('#'));
  return (line || 'Instagram post').replace(/\s+/g, ' ').slice(0, 72);
}

const mapped = posts.map((post) => ({
  id: post.shortcode,
  shortcode: post.shortcode,
  title: titleFrom(post.caption),
  caption: post.caption,
  category: classify(post),
  type: post.type,
  image: post.image,
  href: post.href,
  embed: post.embed,
}));

const file = `export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'bus', label: 'Bus' },
  { id: 'tempo', label: 'Tempo Traveller' },
  { id: 'ads', label: 'Advertisement' },
  { id: 'videos', label: 'Videos' },
  { id: 'intro', label: 'Bus Intro' },
  { id: 'trips', label: 'Trips' },
];

/** Live posts from https://www.instagram.com/vibe_on_holidays_trichy/ */
export const instagramPosts = ${JSON.stringify(mapped, null, 2)};

export function formatPostDate() {
  return 'Instagram';
}

export function postPreview(caption, length = 120) {
  return caption.replace(/\\n+/g, ' ').replace(/\\s+/g, ' ').trim().slice(0, length);
}
`;

fs.writeFileSync(
  path.join(__dirname, '../src/data/instagram.js'),
  file,
);
console.log('wrote', mapped.length, 'instagram posts');
