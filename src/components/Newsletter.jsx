import { useState } from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  function submit(event) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMsg('Please enter a valid email address.');
      return;
    }
    setMsg('You’re on the list! This demo does not send emails.');
    setEmail('');
  }

  return (
    <section className="newsletter-wrap">
      <div className="newsletter">
        <div>
          <span className="eyebrow">
            <Leaf size={14} />
            THE ESCAPE LETTER
          </span>
          <h2>
            GET INSPIRED FOR YOUR
            <br />
            <em>NEXT ESCAPE FROM TRICHY.</em>
          </h2>
          <p>Destination ideas, travel tips, and little reasons to go.</p>
        </div>
        <form onSubmit={submit}>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            required
          />
          <button className="btn btn-gold">
            SUBSCRIBE
            <ArrowRight size={16} />
          </button>
          {msg && <small className="form-message">{msg}</small>}
        </form>
        <Leaf className="newsletter-leaf" size={100} />
      </div>
    </section>
  );
}
