import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <Routes>
      <Route
        element={
          <Layout
            isSignedIn={isSignedIn}
            onToggleSignIn={() => setIsSignedIn(!isSignedIn)}
          />
        }
      >
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<Post />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login onSignIn={() => setIsSignedIn(true)} />} />
        <Route element={<ProtectedRoute isSignedIn={isSignedIn} />}>
          <Route path="admin" element={<Admin onSignOut={() => setIsSignedIn(false)} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
