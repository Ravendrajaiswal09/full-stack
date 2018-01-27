import React, { Component } from 'react';
import Select from 'react-select';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.inputChange = this.inputChange.bind(this);
    this.updateResults = this.updateResults.bind(this);
    this.state = {
      lat : '',
      lng : '',
      ninjas :[]
    };
  }

  inputChange(id, val) {
    if(id == 'lat') 
      this.setState({lat : val})
    else
      this.setState({lng : val})
  }
  updateResults(){
    fetch('/api/ninjas?lng='+ this.state.lng+'&lat='+this.state.lat).then(function(data){
      return data.json();
    }).then(json =>{
      this.setState({ninjas:json})
    })
  }

  render() {
    let ninjas= this.state.ninjas;
    ninjas=ninjas.map(function(ninja,index){
      return (
        <li key= {index}>
          <span className ={ninja.available}></span>
          <span className ="name">{ninja.name}</span>
          <span className ="rank">{ninja.rank}</span>
          <span className ="dist">{Math.floor(ninja.dis/1000)}km</span>
        </li>
      )
    })
    return (
      <div className="ninj-container">
        <input
            type="text"
            placeholder={'latitude'}
            onChange={(event) => this.inputChange('lat', event.target.value)}
            value={this.state.lat}
          ></input>
          <input
            type="text"
            placeholder={'longitude'}
            onChange={(event) => this.inputChange('lng', event.target.value)}
            value={this.state.lng}
          ></input>
         <button onClick={(event) => this.updateResults()} />
         <div>
          <ul>{ninjas}</ul>
        </div>
      </div>
    );
  }
}

export default App;