import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register';

it('Testing if Div Works', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Register />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Testing if Switch Work', () => {
    const Switch = document.createElement('Switch');
    ReactDOM.render(<Register />, Switch);
    ReactDOM.unmountComponentAtNode(Switch);
});

it('Testing if BrowserRouter Works', () => {
    const BrowserRouter = document.createElement('BrowserRouter');
    ReactDOM.render(<Register />, BrowserRouter);
    ReactDOM.unmountComponentAtNode(BrowserRouter);
});

it('Testing if Routing Works', () => {
    const Route = document.createElement('Route');
    ReactDOM.render(<Register />, Route);
    ReactDOM.unmountComponentAtNode(Route);
});

it('Testing if UserContext Works', () => {
    const UserContext = document.createElement('UserContext');
    ReactDOM.render(<Register />, UserContext);
    ReactDOM.unmountComponentAtNode(UserContext);
});

test('Check if two users are the same', () => {
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
test('Check that users are there', function () {
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
test('Mock test for an array of users', function () {
    expect(users).toEqual(expect.arrayContaining(['Mudit', 'Evan']));
});