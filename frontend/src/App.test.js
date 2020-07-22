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

test('check gfgObj toEqual', () => {
    let gfgObj = {
        name: "GFG",
        type: "company",
        members: {
            employees: 100,
            contributors: 500
        }
    };

    let testObj = {
        name: "GFG",
        type: "company",
        members: {
            employees: 100,
            contributors: 500
        }
    };
    expect(gfgObj).toEqual(testObj);
});

//checking for truthy values - All the tests will return truthy.
test('check for truthy', function () {
    const gfgObj = {
        first: null,
        second: undefined,
        third: false
    }
    expect(gfgObj.first).not.toBeTruthy(); // True - Pass
    expect(gfgObj.second).toBeUndefined(); // True - Pass
    expect(gfgObj.third).toBeFalsy();      // True - Pass
});

//testing arrays
const gfgUsers = [
    'user1',
    'user2',
    'user3'
];
test('test for a value in gfgUsers', function () {
    // expect(gfgUsers).toContain('user2');
    // expect(gfgUsers).not.toContain('user2');
    //expect array containing
    expect(gfgUsers).toEqual(expect.arrayContaining(['user1', 'user3']));
});