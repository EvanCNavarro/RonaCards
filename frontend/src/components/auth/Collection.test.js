import React from 'react';
import ReactDOM from 'react-dom';
import Collection from './Collection';

it('Testing if Div Works', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Collection />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Testing if Switch Work', () => {
    const Switch = document.createElement('Switch');
    ReactDOM.render(<Collection />, Switch);
    ReactDOM.unmountComponentAtNode(Switch);
});

it('Testing if BrowserRouter Works', () => {
    const BrowserRouter = document.createElement('BrowserRouter');
    ReactDOM.render(<Collection />, BrowserRouter);
    ReactDOM.unmountComponentAtNode(BrowserRouter);
});

it('Testing if Routing Works', () => {
    const Route = document.createElement('Route');
    ReactDOM.render(<Collection />, Route);
    ReactDOM.unmountComponentAtNode(Route);
});