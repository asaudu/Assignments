import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders App page', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  test("renders App component", () => {
    render(<App />)
  });
});
