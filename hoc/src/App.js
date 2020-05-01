import React, {Component} from 'react';
import Vegeta from './Vegeta';
import Goku from './Goku';
import './App.css';


class App extends Component {

constructor(props) {
  super(props)

  this.state = {
     vegeta: 100,
     goku:100,
    }
}

reduceLife=(param, param2)=>{
  if(param==='Goku'){
    this.setState({
      vegeta:this.state.vegeta - param2
    })
  }else{
    this.setState({
      goku:this.state.goku - param2
    })
  }

}
restartFunc=(e)=>{
      this.setState({
        vegeta: 100,
        goku:100,
     
      })
      
}

  render() {
    
   const Button = (this.state.goku > 0 && this.state.vegeta > 0) ? (<button className="btn btn-secondary m-3 disabled">Recommencer</button>)
    :(<button type="button" className="btn btn-secondary m-3" onClick={this.restartFunc.bind(this)}>Recommencer</button>);
    
    return (
      <div className="container text-center">
          <h1>Vegeta vs Goku</h1>
          <hr />
        <div className="row">
          <Vegeta name="Vegeta" life={this.state.vegeta} reduceHandler={this.reduceLife}/>
          <Goku name="Goku" life={this.state.goku} reduceHandler={this.reduceLife}/>
          
        </div> 
        <div>
          {Button}
        </div>   
      </div>
    )
  }
}

export default App;
