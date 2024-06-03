import {render, screen, cleanup} from "@testing-library/react";
import '@testing-library/jest-dom';
import Button from "./Button";


//her test senaryosu calistiktan sonra burasi invoke ediliyor...
afterEach(() => {
    //DOM'u komple temizliyor...
    cleanup();
})

describe('Button Component Tests', () => {
    const setToggle = jest.fn();
    render(
        <Button setToggle={setToggle} btnText={"Click Me!"}/>
    )
    const button = screen.getByTestId("button");

    test("Button Rendering", () => {
        expect(button).toBeInTheDocument()
    })

    test("Button Text", () => {
        expect(button).toHaveTextContent("Click Me!")
    })
})