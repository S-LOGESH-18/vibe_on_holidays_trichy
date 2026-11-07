import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  bookingWhatsAppMessage,
  destinations,
  site,
  tripTypes,
  whatsappUrl,
} from '../data';

const initial = {
  name: '',
  phone: '',
  destination: '',
  tripType: '',
  members: '',
  message: '',
};

export function BookingForm({ className = '' }) {
  const [form, setForm] = useState(initial);

  function update(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submit(event) {
    event.preventDefault();
    const dest =
      form.destination === 'custom'
        ? 'Anywhere / custom tour'
        : destinations.find((item) => item.id === form.destination)?.name;

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
  }

  return (
    <form
      className={`booking-form glass-card lightning-tile vibe-form ${className}`.trim()}
      onSubmit={submit}
    >
      <div className="form-heading">
        <div>
          <span className="eyebrow">
            <FaWhatsapp size={14} /> WHATSAPP BOOKING
          </span>
          <h2>Tell us your vibe</h2>
        </div>
      </div>
      <p className="form-lead">
        Fill in your travel details and continue on WhatsApp with {site.fullName}.
      </p>
      <div className="form-grid">
        <label>
          Full Name
          <input
            required
            placeholder="Enter your full name"
            value={form.name}
            onChange={(event) => update('name', event.target.value)}
          />
        </label>
        <label>
          Mobile Number
          <input
            required
            type="tel"
            placeholder="Enter your mobile number"
            value={form.phone}
            onChange={(event) => update('phone', event.target.value)}
          />
        </label>
        <label>
          Type of trip
          <select
            required
            value={form.tripType}
            onChange={(event) => update('tripType', event.target.value)}
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
            required
            type="number"
            min="1"
            placeholder="Enter member count"
            value={form.members}
            onChange={(event) => update('members', event.target.value)}
          />
        </label>
        <label className="full-field">
          From Trichy to
          <select
            required
            value={form.destination}
            onChange={(event) => update('destination', event.target.value)}
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
          Your Message
          <textarea
            rows="4"
            placeholder="Tell us your travel date, pickup location, and any special requirements..."
            value={form.message}
            onChange={(event) => update('message', event.target.value)}
          />
        </label>
      </div>
      <div className="form-footer">
        <span>Opens WhatsApp with your trip details for {site.name}.</span>
        <button className="btn btn-gold" type="submit">
          Book via WhatsApp <FaWhatsapp />
        </button>
      </div>
    </form>
  );
}
