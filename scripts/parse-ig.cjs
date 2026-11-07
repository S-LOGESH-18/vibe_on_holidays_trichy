const fs = require('fs');
const path = require('path');
const html = fs.readFileSync('d:/CompanyProject/VibeHolidays/ig-profile.html', 'utf8');

function toShortcode(id) {
  const alphabet =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  let n = BigInt(id);
  let code = '';
  while (n > 0n) {
    const remainder = n % 64n;
    n = n / 64n;
    code = alphabet[Number(remainder)] + code;
  }
  return code;
}

function unescapeIg(str) {
  return JSON.parse(`"${str}"`);
}

function classify(caption, type) {
  const text = caption.toLowerCase();
  if (type === 'video') return 'videos';
  if (text.includes('tempo') || text.includes('traveller')) return 'tempo';
  if (text.includes('intro') || text.includes('vibe machine')) return 'intro';
  if (
    text.includes('package') ||
    text.includes('customized') ||
    text.includes('customised') ||
    text.includes('contact') ||
    text.includes('whatsapp')
  )
    return 'ads';
  if (text.includes('bus') || text.includes('volvo')) return 'bus';
  return 'trips';
}

const posts = [];
const seen = new Set();
const re = /"pk":"(\d{18,})","image_versions2"/g;
let match;

while ((match = re.exec(html))) {
  const pk = match[1];
  if (seen.has(pk)) continue;
  seen.add(pk);

  const slice = html.slice(match.index, match.index + 20000);
  const display = slice.match(/"display_uri":"(https:\\\/\\\/[^"]+)"/);
  const capMatch = slice.match(
    /"caption":\{"pk":"\d+","text":"((?:\\.|[^"\\])*)"\}/,
  );
  const typeMatch = slice.match(/"media_type":(\d+)/);
  const productMatch = slice.match(/"product_type":"([^"]+)"/);

  if (!display) continue;

  const image = unescapeIg(display[1]);
  let caption = '';
  if (capMatch) {
    try {
      caption = unescapeIg(capMatch[1]);
    } catch {
      caption = capMatch[1];
    }
  }

  const mediaType = typeMatch ? Number(typeMatch[1]) : 1;
  const productType = productMatch?.[1] || '';
  const isVideo = mediaType === 2 || productType === 'clips';
  const shortcode = toShortcode(pk);

  posts.push({
    id: pk,
    shortcode,
    href: `https://www.instagram.com/${isVideo ? 'reel' : 'p'}/${shortcode}/`,
    embed: `https://www.instagram.com/${isVideo ? 'reel' : 'p'}/${shortcode}/embed`,
    image,
    caption,
    type: isVideo ? 'video' : 'image',
    category: classify(caption, isVideo ? 'video' : 'image'),
  });
}

console.log('parsed', posts.length);
posts.forEach((p, i) => {
  console.log(
    `${i + 1}. ${p.shortcode} ${p.type} ${p.category}\n   ${p.href}\n   ${p.caption.slice(0, 90).replace(/\n/g, ' ')}`,
  );
});

fs.writeFileSync(
  path.join(__dirname, 'ig-posts.json'),
  JSON.stringify(posts, null, 2),
);
