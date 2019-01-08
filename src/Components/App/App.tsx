import React, { Component } from 'react';
import logo from '../../logo.svg';
import Button from '../Button/Button';
import List from '../List/List';
import TextField from '../TextField/TextField';
import './App.css';

class App extends Component {

  //Define state so typescript can recognize it
  state = {inputText: "", submitText: ""};

  constructor() {
      super({})

      //React needs you to manually bind the correct "this" reference to the methods
      this.handleButtonClick = this.handleButtonClick.bind(this);
      this.handleInput = this.handleInput.bind(this);
  }

  //Takes the text in the Text Box and submits it to the List Component through state
  handleButtonClick() {
      this.setState({
          submitText: this.state.inputText,
          inputText: ""
      });
  }

  //Updates the state to reflect what is in the Text Box
  handleInput(input: string) {
      this.setState({
          inputText: input
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Button buttonText="Add to List" buttonClicked={this.handleButtonClick}/>
            <TextField textChanged={this.handleInput}/>
          </div>
        <List itemText={this.state.submitText}/>
        </header>
      </div>
    );
  }
}

export default App;
