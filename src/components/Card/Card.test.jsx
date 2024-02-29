import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './Card';

describe("Card component", () => {
    test("Add to Cart button adds product to cart", () => {

        const addToCartMock = vi.fn();
        
        const { getByText } = render(
            <Card
              name="Test Product"
              price={10}
              url="test-url"
              addToCart={addToCartMock}
            />
        );

        const addToCartButton = getByText('Add to Cart');
        fireEvent.click(addToCartButton);

        expect(addToCartMock).toHaveBeenCalledWith({
            uniqueId: expect.any(String),
            img: 'test-url',
            name: 'Test Product',
            price: 10
        });
    })
})