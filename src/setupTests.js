// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { setupServer } from 'msw/node';
import { handlers } from './mockHandlers';

const server = setupServer(...handlers);

// Start the server before tests run
beforeAll(() => server.listen());

// Reset handlers after each test
afterEach(() => server.resetHandlers());

// Close the server after tests
afterAll(() => server.close());