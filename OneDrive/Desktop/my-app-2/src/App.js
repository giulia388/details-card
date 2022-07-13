import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Square } from './components/square';
import { DetailsCard } from './components/detaildCard';

class App extends React.Component{

  constructor() {
    super();
    this.label = "Hello World";
  }

  sum(num1, num2) {
    return num1 + num2;
  }

  render() {

    return (
      <div>
        <h1>My Web App</h1>
        <Square title="Ciao sono un quadratino"/>
        <DetailsCard
        titleP1="2.3 millions"
        titleP2="users"
        icon="logo192.png"
        description="qualcosa dai"
        />
      </div>
    )
  }
}

export default App;
