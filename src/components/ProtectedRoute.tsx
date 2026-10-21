import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute({ isSignedIn }: { isSignedIn: boolean }) {
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
