import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Check, Music2, ShieldCheck, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  bookingWhatsAppMessage,
  destinations,
  site,
  tripTypes,
  whatsappUrl,
} from '../data';
import { RiseIn } from '../components';

export function Booking() {
  const [params] = useSearchParams();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    destination: params.get('destination') || '',
    tripType: '',
    members: '',
    message: '',
  });
  const [done, setDone] = useState(false);

  const dest =
    form.destination === 'custom'
      ? 'Anywhere / custom tour'
      : destinations.find((item) => item.id === form.destination)?.name;

  function update(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submit(event) {
    event.preventDefault();
    window.open(
      whatsappUrl(
        bookingWhatsAppMessage({
          name: form.name,
          phone: form.phone,
          destination: dest,
          tripType: form.tripType,
          members: form.members,
          message: form.message,
        }),
      ),
      '_blank',
      'noopener,noreferrer',
    );
    setDone(true);
  }

  if (done) {
    return (
      <main className="confirmation lightning-tile">
        <div className="confirm-icon">
          <Check />
        </div>
        <span className="eyebrow">WHATSAPP BOOKING</span>
        <h1>
          Your next vibe
          <br />
          <em>starts here.</em>
        </h1>
        <p>
          Thanks, {form.name}. WhatsApp should now be open with your trip
          details for {site.fullName}.
        </p>
        <div className="confirm-summary">
          <b>{dest || 'Your holiday'}</b>
          <span>
            {form.tripType} · {form.members} members
          </span>
        </div>
        <div className="hero-buttons" style={{ justifyContent: 'center' }}>
          <a className="btn btn-gold" href={whatsappUrl()}>
            Open WhatsApp again <FaWhatsapp />
          </a>
          <Link className="btn btn-glass" to="/">
            Back to exploring <ArrowRight />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="booking-page vibe-book">
      <RiseIn>
        <div className="booking-intro">
          <span className="eyebrow">
            <Sparkles size={14} /> LOCK IN THE VIBE
          </span>
          <h1>
            Book your travel
            <br />
            <em>with energy.</em>
          </h1>
          <p>
            Tell us a little about your trip. We’ll open WhatsApp with a ready
            message to {site.fullName}.
          </p>
          <div className="vibe-chips">
            {tripTypes.slice(0, 6).map((type) => (
              <span key={type}>{type}</span>
            ))}
          </div>
        </div>
      </RiseIn>
      <RiseIn delay={0.12}>
        <form className="booking-form lightning-tile vibe-form" onSubmit={submit}>
          <div className="form-heading">
            <div>
              <span className="eyebrow">
                <Music2 size={14} /> TRIP DETAILS
              </span>
              <h2>Tell us your vibe</h2>
            </div>
            <span className="step-pill">WhatsApp</span>
          </div>
          <div className="form-grid">
            <label>
              Full name
              <input
                value={form.name}
                onChange={(event) => update('name', event.target.value)}
                placeholder="Your full name"
                required
              />
            </label>
            <label>
              Mobile number
              <input
                type="tel"
                pattern="[0-9+() -]{8,18}"
                value={form.phone}
                onChange={(event) => update('phone', event.target.value)}
                placeholder="Your mobile number"
                required
              />
            </label>
            <label>
              Type of trip
              <select
                value={form.tripType}
                onChange={(event) => update('tripType', event.target.value)}
                required
              >
                <option value="">Select type of trip</option>
                {tripTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label>
              How many members
              <input
                type="number"
                min="1"
                value={form.members}
                onChange={(event) => update('members', event.target.value)}
                placeholder="Enter member count"
                required
              />
            </label>
            <label className="full-field">
              Your Destinations
              <select
                value={form.destination}
                onChange={(event) => update('destination', event.target.value)}
                required
              >
                <option value="">Select destination</option>
                {destinations.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
                <option value="custom">Anywhere / custom tour</option>
              </select>
            </label>
            <label className="full-field">
              Your message
              <textarea
                rows="4"
                value={form.message}
                onChange={(event) => update('message', event.target.value)}
                placeholder="Tell us your travel date, pickup location, and any special requirements..."
              />
            </label>
          </div>
          <div className="form-footer">
            <span>
              <ShieldCheck /> Continues on WhatsApp with {site.name} — no payment
              on this page
            </span>
            <button className="btn btn-gold" type="submit">
              Book via WhatsApp <FaWhatsapp />
            </button>
          </div>
        </form>
      </RiseIn>
    </main>
  );
}
