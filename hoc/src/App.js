import React, {Component} from 'react';
import Vegeta from './Vegeta';
import Goku from './Goku';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container text-center">
          <h1>Goku vs Vegeta</h1>
          <hr />
        <div className="row">
          <Vegeta name="Vegeta" />
          <Goku name="Goku"/>
        </div>    
      </div>
    )
  }
}

export default App;
