export type PostItem = {
  id: number;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  body: string;
  comments: string[];
};

export const posts: PostItem[] = [
  {
    id: 1,
    title: 'Getting Started with React Router',
    date: '2 October 2026',
    tags: ['React', 'TypeScript'],
    summary: 'How I connected the Home, Posts and Contact pages in my React app without page reloads.',
    body: 'Routes turn URLs into screens. In Week 4 I learned how to put my pages inside a single Layout route with Outlet so the header and footer stay in place while the page content changes. Using NavLink also highlights whichever page is currently open.',
    comments: [
      'Outlet made the shared header and footer much cleaner.',
      'NavLink active styles work great here.',
    ],
  },
  {
    id: 2,
    title: 'Design Tokens in Plain CSS',
    date: '6 October 2026',
    tags: ['CSS', 'Design'],
    summary: 'Turning Figma variables from our Week 5 handoff notes into reusable CSS custom properties.',
    body: 'One CSS variable per design value keeps the whole stylesheet consistent. When I changed --color-muted to a darker grey after checking contrast in DevTools, every date and subtitle passed the 4.5:1 ratio right away without hunting for hex codes.',
    comments: [
      'CSS variables make updating colours across components very fast.',
    ],
  },
  {
    id: 3,
    title: 'Building Reusable UI Components',
    date: '11 October 2026',
    tags: ['React', 'UI'],
    summary: 'Creating Button, Card and Tag components from the starter design in TypeScript.',
    body: 'Instead of repeating classes on every button and box, I wrapped them in small UI components with typed props. Passing the remaining HTML button props through Button meant my click handlers and accessibility labels kept working after the refactor.',
    comments: [
      'Spreading the rest props on Button saved my tests too.',
    ],
  },
  {
    id: 4,
    title: 'Testing Components with Vitest',
    date: '16 October 2026',
    tags: ['Vitest', 'Testing'],
    summary: 'Writing component tests for buttons, post lists and protected routes with React Testing Library.',
    body: 'Render, click, assert. A good test interacts with the component the same way a user does: finding elements by role, clicking with userEvent, and checking what appears on screen. MemoryRouter also makes it easy to test any route directly.',
    comments: [
      'MemoryRouter with initialEntries is super convenient for route tests.',
    ],
  },
  {
    id: 5,
    title: 'Balancing Uni Projects and Gaming',
    date: '20 October 2026',
    tags: ['KBTU', 'Life'],
    summary: 'How I organize my third-year IT Management coursework at KBTU and still find time to rest.',
    body: 'Between frontend labs, database assignments and project management, third year at KBTU can get busy fast. Breaking weekly tasks into small commits over a couple of days helps me finish on time and still enjoy some evening games or sleep.',
    comments: [
      'Small commits over several days definitely beat last-minute crunching.',
    ],
  },
];
