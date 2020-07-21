import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('My Test Case', () => {
    expect(true).toEqual(true);
});

it('renders without crashing_2', () => {
    const div = document.createElement('form');
    ReactDOM.render(<App />, form);
    ReactDOM.unmountComponentAtNode(form);
});
