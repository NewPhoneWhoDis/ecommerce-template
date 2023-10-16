import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import Jest DOM matchers
import SimpleComponent from './SimpleComponent';

test('renders hello world', () => {
  render(<SimpleComponent />);
  const element = screen.getByText(/hello, world/i);
  expect(element).toBeInTheDocument(); // Now TypeScript recognizes toBeInTheDocument()
});
