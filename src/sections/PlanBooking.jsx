import { Link } from 'react-router-dom';
import { FaInstagram, FaPhone } from 'react-icons/fa';
import { MapPin, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { site } from '../data';
import { BookingForm, GlassCard, RiseIn, SectionHeading } from '../components';

export function PlanBooking() {
  return (
    <section id="plan" className="section contact-band vibe-book">
      <SectionHeading
        eyebrow="LOCK IN THE VIBE"
        title="Book your travel"
        subtitle="College I.V, school, corporate, friends, family or custom — send a WhatsApp note and we’ll plan it."
      />
      <div className="contact-band-grid">
        <div className="contact-facts">
          <RiseIn>
            <GlassCard className="lightning-tile">
              <Phone size={18} />
              <h4>Call Us</h4>
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </GlassCard>
          </RiseIn>
          <RiseIn delay={0.06}>
            <GlassCard className="lightning-tile">
              <FaInstagram size={18} />
              <h4>Instagram</h4>
              <a href={site.instagram} target="_blank" rel="noreferrer">
                {site.instagramHandle}
              </a>
            </GlassCard>
          </RiseIn>
          <RiseIn delay={0.12}>
            <GlassCard className="lightning-tile">
              <MapPin size={18} />
              <h4>Office</h4>
              <p>{site.address}</p>
            </GlassCard>
          </RiseIn>
          <RiseIn delay={0.18}>
            <GlassCard className="lightning-tile">
              <Sparkles size={18} />
              <h4>Service Areas</h4>
              <p>{site.serviceAreas}</p>
            </GlassCard>
          </RiseIn>
          <RiseIn delay={0.24}>
            <GlassCard className="lightning-tile">
              <FaPhone size={18} />
              <h4>WhatsApp Booking</h4>
              <Link to="/booking">
                {site.phoneDisplay}
              </Link>
            </GlassCard>
          </RiseIn>
          <RiseIn delay={0.3}>
            <GlassCard className="lightning-tile">
              <MessageCircle size={18} />
              <h4>DM Booking</h4>
              <a href={site.instagram} target="_blank" rel="noreferrer">
                {site.instagramHandle}
              </a>
            </GlassCard>
          </RiseIn>
        </div>

        <RiseIn delay={0.1}>
          <BookingForm />
        </RiseIn>
      </div>
    </section>
  );
}
