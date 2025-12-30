import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders property search heading", () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

    expect(screen.getByText(/Property Search/i)).toBeInTheDocument();
});