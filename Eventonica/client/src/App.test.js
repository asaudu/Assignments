import { render, screen } from '@testing-library/react';
import App from './App';
import Footer from './components/Footer';
import Users from './components/Users';

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

describe("Users", () => {
  test("renders Users component", () => {
    render(<Users />)
  });
});

describe("Footer", () => {
  test("renders Footer component", () => {
    render(<Footer />)
  });
});
