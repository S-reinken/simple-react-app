import React, { Component } from 'react';
import logo from '../../logo.svg';
import Button from '../Button/Button';
import List from '../List/List';
import TextField from '../TextField/TextField';
import './App.css';

class App extends Component {
  state = {inputText: "", submitText: ""};

  constructor() {
      super({})
      this.handleButtonClick = this.handleButtonClick.bind(this);
      this.handleInput = this.handleInput.bind(this);
  }

  handleButtonClick() {
      this.setState({
          submitText: this.state.inputText,
          inputText: ""
      });
  }

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
