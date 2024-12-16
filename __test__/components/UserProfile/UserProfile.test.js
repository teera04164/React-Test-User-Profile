import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import UserProfile from "../../../src/components/UserProfile/UserProfile";
describe("UserProfile", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    test("should render loading state initially", () => {
        render(<UserProfile userId="123" />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("should render user info when fetch is successful", async () => {
        render(<UserProfile userId="123" />);
        await waitFor(() => expect(screen.getByText("John Doe")).toBeInTheDocument());
        expect(screen.getByText(/email: john.doe@example.com/i)).toBeInTheDocument();
    });

    test("should render error when fetch is error", async () => {
        render(<UserProfile userId="345" />);
        await waitFor(() => expect(screen.getByText(/Error/i)).toBeInTheDocument());
    });
});
