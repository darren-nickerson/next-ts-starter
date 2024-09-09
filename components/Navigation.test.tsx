import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

// Mock the usePathname hook
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Navigation", () => {
  it("renders navigation links", () => {
    render(<Navigation />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();


    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });

  it("applies active class to current page link", () => {
    render(<Navigation />);

    const homeLink = screen.getByText("Home");
    expect(homeLink).toHaveClass("bg-primary");

    const usersLink = screen.getByText("Users");
    expect(usersLink).not.toHaveClass("bg-primary");
  });
});
