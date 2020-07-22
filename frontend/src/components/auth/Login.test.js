import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

it('Testing if Div Works', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Testing if Switch Work', () => {
    const Switch = document.createElement('Switch');
    ReactDOM.render(<Login />, Switch);
    ReactDOM.unmountComponentAtNode(Switch);
});

it('Testing if BrowserRouter Works', () => {
    const BrowserRouter = document.createElement('BrowserRouter');
    ReactDOM.render(<Login />, BrowserRouter);
    ReactDOM.unmountComponentAtNode(BrowserRouter);
});

it('Testing if Routing Works', () => {
    const Route = document.createElement('Route');
    ReactDOM.render(<Login />, Route);
    ReactDOM.unmountComponentAtNode(Route);
});