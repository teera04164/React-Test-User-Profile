import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "../../../src/components/UserProfile/Loading";

test("renders the loading message", () => {
    render(<Loading />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
});
