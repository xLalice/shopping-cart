import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('renders navigation links and logo', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    
    const logoLink = screen.getByRole('link', { name: /perfectfit/i });
    const shopLink = screen.getByRole('link', { name: /shop/i });
    const cartLink = screen.getByRole('link', { name: /cart/i });

    expect(logoLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
  });

  test('displays search and cart icons', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    
    const searchIcon = screen.getByAltText('search icon');
    const cartIcon = screen.getByAltText('cart icon');

    expect(searchIcon).toBeInTheDocument();
    expect(cartIcon).toBeInTheDocument();
  });

  test('contains navigation links to Home and Shop pages', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const homeLink = screen.getByRole('link', { name: /perfectfit/i });
    const shopLink = screen.getByRole('link', { name: /shop/i });

    // Assert that the Home link is present and points to the root path
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute('href')).toBe('/');

    // Assert that the Shop link is present and points to the /shop path
    expect(shopLink).toBeInTheDocument();
    expect(shopLink.getAttribute('href')).toBe('/shop');
  });
});
