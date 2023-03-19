import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button';

describe("Button", () => {

    it("renders correctly", async () => {
        // ARRANGE
        render(<Button label='This is Button'/>)

        // ACT
        const button = screen.getByRole('button')
        await userEvent.click(button)
        
        // ASSERT
        expect(button).toHaveTextContent('This is Button') 
    });
})