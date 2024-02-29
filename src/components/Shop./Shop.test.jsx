import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Shop Component', () => {
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
  
    
  });
  