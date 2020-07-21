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
    const Switch = document.createElement('Switch');
    ReactDOM.render(<App />, Switch);
    ReactDOM.unmountComponentAtNode(Switch);
});
