import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { test, expect } from "vitest";
import App from "./App";

const renderApp = () =>
    render(
        <HashRouter>
            <App />
        </HashRouter>
    );

test("renders Property Search heading", () => {
    renderApp();
    expect(screen.getByText(/Property Search/i)).toBeInTheDocument();
});

test("renders Search Results section", () => {
    renderApp();
    expect(screen.getByText(/Search Results/i)).toBeInTheDocument();
});

test("renders Favourites section", () => {
    renderApp();
    expect(screen.getByText(/Favourites/i)).toBeInTheDocument();
});

test("renders at least one property image", () => {
    renderApp();
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
});

test("application renders without crashing", () => {
    renderApp();
    expect(true).toBe(true);
});