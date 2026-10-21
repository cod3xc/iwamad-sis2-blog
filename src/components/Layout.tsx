import { Outlet } from 'react-router-dom';
import { Header } from './Header';

type LayoutProps = {
  isSignedIn: boolean;
  onToggleSignIn: () => void;
};

export function Layout({ isSignedIn, onToggleSignIn }: LayoutProps) {
  return (
    <>
      <Header isSignedIn={isSignedIn} onToggleSignIn={onToggleSignIn} />
      <main className="page">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>Arslan Alisher - KBTU 2026</p>
      </footer>
    </>
  );
}
