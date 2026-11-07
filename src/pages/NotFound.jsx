import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';

export function NotFound() {
  return (
    <main className="empty-state">
      <Compass />
      <h1>Looks like this trail ends here.</h1>
      <Link className="btn btn-gold" to="/">
        Back home <ArrowRight />
      </Link>
    </main>
  );
}
