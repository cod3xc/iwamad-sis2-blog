import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { posts } from '../data/posts';

export default function Admin({ onSignOut }: { onSignOut: () => void }) {
  return (
    <section className="contact">
      <h1>Author Dashboard</h1>
      <Card>
        <p>Welcome back, Arslan. This page is only visible when you are signed in.</p>
        <p className="text-muted">Published posts: {posts.length}</p>
        <div>
          <Button variant="secondary" onClick={onSignOut}>
            Sign out
          </Button>
        </div>
      </Card>
    </section>
  );
}
