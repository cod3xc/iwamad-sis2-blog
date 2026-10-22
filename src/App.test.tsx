import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { posts } from './data/posts';

test('renders one card per post in the posts array', () => {
  render(
    <MemoryRouter initialEntries={['/posts']}>
      <App />
    </MemoryRouter>,
  );
  const cards = screen.getAllByRole('article');
  expect(cards).toHaveLength(posts.length);
});

test('shows sign-in page when opening protected route while signed out', () => {
  render(
    <MemoryRouter initialEntries={['/admin']}>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument();
});

test('toggles comments on a blog post page when clicked', async () => {
  render(
    <MemoryRouter initialEntries={['/posts/1']}>
      <App />
    </MemoryRouter>,
  );
  const toggleBtn = screen.getByRole('button', { name: /show comments/i });
  await userEvent.click(toggleBtn);
  expect(screen.getByText(/outlet made the shared header/i)).toBeInTheDocument();
});
