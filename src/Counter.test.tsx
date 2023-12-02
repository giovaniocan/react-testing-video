/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, screen } from "@testing-library/react"
import { Counter } from "./Counter"

describe('Counter component', () => {
    it('should recieve a function', () => {
        const { getByText } = screen

        const increaseFunction = jest.fn()
        const decreaseFunction = jest.fn()

        render(<Counter
                    counter={0}
                    decrease={decreaseFunction}
                    increase={increaseFunction}
                />)

        const increaseButton = getByText('mais')
        const decreaseButton = getByText('menos') 

        fireEvent.click(increaseButton);
        expect(increaseFunction).toHaveBeenCalled()

        fireEvent.click(decreaseButton);
        expect(decreaseFunction).toHaveBeenCalled()
    })
})