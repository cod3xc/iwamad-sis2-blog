import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { Button } from './ui/Button';

type HeaderProps = {
  isSignedIn: boolean;
  onToggleSignIn: () => void;
};

export function Header({ isSignedIn, onToggleSignIn }: HeaderProps) {
  return (
    <header className="site-header">
      <Link to="/" className="site-header__brand">
        <img src={logo} alt="" width={32} height={32} />
        <span>Arslan Alisher</span>
      </Link>
      <nav className="site-header__nav" aria-label="Main">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        <Button variant="secondary" onClick={onToggleSignIn}>
          {isSignedIn ? 'Sign out' : 'Sign in'}
        </Button>
      </nav>
    </header>
  );
}
