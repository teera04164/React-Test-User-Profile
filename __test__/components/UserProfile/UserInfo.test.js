
import React from "react";
import { render, screen } from "@testing-library/react";
import UserInfo from "../../../src/components/UserProfile/UserInfo";

test("renders user info with name and email", () => {
    render(<UserInfo name="John Doe" email="john.doe@example.com" />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Email: john.doe@example.com")).toBeInTheDocument();
});
