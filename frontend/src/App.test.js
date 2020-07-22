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

test('check firstUser toEqual', () => {
    let firstUser = {
        username: "evan",
        email: "evancnavarro@gmail.com",
        password: "password"
    };

    let secondUser = {
        username: "evan",
        email: "evancnavarro@gmail.com",
        password: "password"
    };
    expect(firstUser).toEqual(secondUser);
});

//checking for truthy values - All the tests will return truthy.
test('check for users truthy', function () {
    const users = {
        Ataberk: null,
        Patrick: undefined,
        Sandy: false
    }
    expect(users.Ataberk).not.toBeTruthy(); // True - Pass
    expect(users.Patrick).toBeUndefined(); // True - Pass
    expect(users.Sandy).toBeFalsy();      // True - Pass
});

//testing arrays of users
const users = [
    'Mudit',
    'Faizar',
    'Evan'
];
test('test for a value in users', function () {
    expect(users).toEqual(expect.arrayContaining(['Mudit', 'Evan']));
});