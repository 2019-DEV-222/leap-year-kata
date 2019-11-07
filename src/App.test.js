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

  it('should show message to enter value greater than 1581', () => {
    let enteredYear = "1111";
    appInstance.checkIfYearWithinRange(enteredYear);
    
    expect(appInstance.state.isLeapYear).toEqual("Enter a number greater than 1581");
  });

  it('should show message that says that its not a leap year', () => {
    let enteredYear = "1991";
    appInstance.finalCheckIfItsLeapYear(enteredYear);
    expect(appInstance.state.isLeapYear).toEqual("It is not a leap year");
  });
  
  it('should show message saying that its a leap year', () => {
    let enteredYear = "2000";
    appInstance.finalCheckIfItsLeapYear(enteredYear);
    expect(appInstance.state.isLeapYear).toEqual("It is a leap year!!");
  });
});
