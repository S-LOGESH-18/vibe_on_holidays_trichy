export const site = {
  name: 'Vibe on Holidays',
  location: 'Trichy',
  fullName: 'Vibe on Holidays – Trichy',
  role: 'Tour Agent',
  tagline: 'நீங்க வாங்க vibe- க்கு நாங்க',
  quote: 'நீங்க வாங்க vibe- க்கு நாங்க',
  slogan: 'Customised Tour Packages || South Region',
  packagesLine: 'Customised Tour Packages || South Region',
  phoneDisplay: '+91 85310 32030',
  phoneTel: '+918531032030',
  whatsapp: '918531032030',
  instagram: 'https://www.instagram.com/vibe_on_holidays_trichy/',
  instagramHandle: '@vibe_on_holidays_trichy',
  email: '',
  address: 'Trichy | Dindigul | TJV | CBE',
  serviceAreas: 'Trichy | Dindigul | TJV | CBE',
};

export function whatsappUrl(message = '') {
  const text = message || `Hi ${site.fullName}, ${site.tagline}`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const tripTypes = [
  'College I.V',
  'School Tour',
  'Corporate Tour',
  'Friends Tour',
  'Family Tour',
  'Devotional Tour',
  'Custom Tour',
];

export const vehicleTypes = ['24 Seater Bus', '60 Seater Bus'];

export const vehicleCounts = ['1', '2', '3', '4', '5'];

export function bookingWhatsAppMessage(fields) {
  const lines = [
    `Hello ${site.fullName}, I would like to plan a trip from Trichy.`,
    fields.name && `Name: ${fields.name}`,
    fields.phone && `Mobile: ${fields.phone}`,
    fields.email && `Email: ${fields.email}`,
    fields.tripType && `Type of trip: ${fields.tripType}`,
    fields.members && `Members: ${fields.members}`,
    fields.destination && `From Trichy to: ${fields.destination}`,
    fields.date && `Travel date: ${fields.date}`,
    fields.travelers && `Travelers: ${fields.travelers}`,
    fields.adults && `Adults: ${fields.adults}`,
    fields.children && `Children: ${fields.children}`,
    fields.message && `Message: ${fields.message}`,
    fields.requests && `Requests: ${fields.requests}`,
  ].filter(Boolean);

  return lines.join('\n');
}
