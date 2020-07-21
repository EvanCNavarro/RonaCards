import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('My Test Case', () => {
    expect(true).toEqual(true);
});

test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Forgot Your Password/i);
    expect(linkElement).toBeInTheDocument();
});