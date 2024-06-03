import {render, cleanup, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Text from "./Text";

afterEach(() => {
    cleanup();
});


describe("Text Component Test", () => {

    test("Text Rendering", () => {
        render(<Text toggle={true} displayText={"GeeksForGeeks"}/>)
        const text = screen.getByTestId("text");
        expect(text).toBeInTheDocument();
    })

    test("Displayed Text when toggle is set to true", () => {
        render(<Text toggle={true} displayText={"GeeksForGeeks"}/>)
        const text = screen.getByTestId("text");
        expect(text).toHaveTextContent("GeeksForGeeks");
    })

    test("Do not display text when toggle is set to false", () => {
        render(<Text toggle={false} displayText={"GeeksForGeeks"}/>)
        const text = screen.getByTestId("text");
        expect(text).toBeEmptyDOMElement();
    })


})