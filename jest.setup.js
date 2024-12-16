import '@testing-library/jest-dom'
import 'cross-fetch/polyfill' 
import 'whatwg-fetch'
import { server } from './mocks/msw-server';

// Start the server before tests run
beforeAll(() => server.listen());

// Reset handlers after each test
afterEach(() => server.resetHandlers());

// Close the server after tests
afterAll(() => server.close());