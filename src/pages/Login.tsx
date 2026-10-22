import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Login({ onSignIn }: { onSignIn: () => void }) {
  const navigate = useNavigate();

  function handleSignIn() {
    onSignIn();
    navigate('/admin');
  }

  return (
    <section className="contact">
      <h1>Sign In</h1>
      <Card>
        <p>You need to sign in to view the protected page.</p>
        <div>
          <Button variant="primary" onClick={handleSignIn}>
            Sign in
          </Button>
        </div>
      </Card>
    </section>
  );
}
