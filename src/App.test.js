import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import App from './App';

configure({ adapter: new Adapter() });

const appWrapper = shallow(<App />);
const appInstance = appWrapper.instance();

describe('App Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});

describe('Check if it is a leap year', ()=>{
 
  it('should show message if entered value is non-numeric',() => {
   
    let enteredYear = "abcd";
    appInstance.checkIfItsANumber(enteredYear);
    expect(appInstance.state.isLeapYear).toEqual("Enter a number");   
  });
});
