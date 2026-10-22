import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';

export default function NotFound() {
  return (
    <section className="contact">
      <Card>
        <h1>404 — Page not found</h1>
        <p className="text-muted">The page you are looking for does not exist.</p>
        <p>
          <Link to="/">Go back home</Link>
        </p>
      </Card>
    </section>
  );
}
