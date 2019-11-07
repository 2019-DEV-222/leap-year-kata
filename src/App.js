import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      year: 'year',
      isLeapYear: ''
    }
   }

  checkIfItsLeapYear = e => {
    this.setState({ year: e.target.value });
    this.checkIfItsANumber(e.target.value);
  }

  checkIfItsANumber = enteredNumber => {
    let userInput = enteredNumber;
    const numberPattern = new RegExp("^[0-9]+$");
    if (numberPattern.test(userInput)) {
      this.setState({ isLeapYear: '' });
    }
    else {
      this.setState({ isLeapYear: 'Enter a number' });
    }
  }

  render() {
    return (
      <div className="App">
        <h3>Check if Entered Year is a Leap Year</h3>
        <h4>Enter Year:</h4>
        <input type="text" maxLength="6" defaultValue={this.state.year}
          onChange={this.checkIfItsLeapYear}></input>
        <h4>{this.state.isLeapYear}</h4>
      </div >
    );
  }
}

export default App;