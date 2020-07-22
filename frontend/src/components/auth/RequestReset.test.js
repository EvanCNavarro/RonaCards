import React from 'react';
import ReactDOM from 'react-dom';
import RequestReset from './RequestReset';

it('Testing if Div Works', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RequestReset />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Testing if Switch Work', () => {
    const Switch = document.createElement('Switch');
    ReactDOM.render(<RequestReset />, Switch);
    ReactDOM.unmountComponentAtNode(Switch);
});

it('Testing if BrowserRouter Works', () => {
    const BrowserRouter = document.createElement('BrowserRouter');
    ReactDOM.render(<RequestReset />, BrowserRouter);
    ReactDOM.unmountComponentAtNode(BrowserRouter);
});

it('Testing if Routing Works', () => {
    const Route = document.createElement('Route');
    ReactDOM.render(<RequestReset />, Route);
    ReactDOM.unmountComponentAtNode(Route);
});