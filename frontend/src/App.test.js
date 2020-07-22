import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('My First Test Case', () => {
    expect(true).toEqual(true);
});

it('Testing if Div Works', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Testing if Switch Work', () => {
    const Switch = document.createElement('Switch');
    ReactDOM.render(<App />, Switch);
    ReactDOM.unmountComponentAtNode(Switch);
});

it('Testing if BrowserRouter Works', () => {
    const BrowserRouter = document.createElement('BrowserRouter');
    ReactDOM.render(<App />, BrowserRouter);
    ReactDOM.unmountComponentAtNode(BrowserRouter);
});

it('Testing if Routing Works', () => {
    const Route = document.createElement('Route');
    ReactDOM.render(<App />, Route);
    ReactDOM.unmountComponentAtNode(Route);
});

it('Testing if UserContext Works', () => {
    const UserContext = document.createElement('UserContext');
    ReactDOM.render(<App />, UserContext);
    ReactDOM.unmountComponentAtNode(UserContext);
});

