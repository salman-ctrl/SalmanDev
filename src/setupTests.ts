// Import jest-dom untuk menambahkan custom matchers
import '@testing-library/jest-dom';

// Jika Anda menggunakan react-router-dom dan ingin melakukan mocking
// import { BrowserRouter } from 'react-router-dom';

// Mock untuk window.matchMedia karena tidak tersedia di jsdom
window.matchMedia = jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
}));

// Optional: Suppress console errors selama testing
const originalConsoleError = console.error;
beforeAll(() => {
    console.error = jest.fn();
});

afterAll(() => {
    console.error = originalConsoleError;
});