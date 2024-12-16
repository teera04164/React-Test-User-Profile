import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "../../../src/components/UserProfile/Error";

test("renders the error message", () => {
    render(<Error error="An error occurred" />);
    expect(screen.getByText("Error: An error occurred")).toBeInTheDocument();
});
