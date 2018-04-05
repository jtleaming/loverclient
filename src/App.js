import React, { Component } from 'react';
import {Button} from 'reactstrap'
import axios from 'axios';
import './App.css';

class App extends Component {
  sendGif = () =>{
    axios.post('http://10.86.1.58:5002/api/sendmessage', {
            name: this.state.name,
            message: this.state.message
        }, { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": " Origin, X-Requested-With, Content-Type, Accept" } })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            window.prompt(error);
        });
  }
  render() {
    return (
      <div className="">
          <h1 className="">Welcome! Send a gif!</h1>
          <Button className="btn"><i className="heart fa fa-heart fa-4x fa-beat"></i>Send some love...</Button>
          <Button className="btn" onClick={this.sendGif}><i className="heart fa fa-heart fa-4x fa-beat"></i>Send some love...</Button>
      </div>
    );
  }
}

export default App;
