import { test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

test('Button calls onClick once when clicked', async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Save</Button>);
  await userEvent.click(screen.getByRole('button', { name: 'Save' }));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('Button can be activated with keyboard Enter', async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Press me</Button>);
  await userEvent.tab();
  await userEvent.keyboard('{Enter}');
  expect(handleClick).toHaveBeenCalledTimes(1);
});
