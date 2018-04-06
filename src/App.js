import React, { Component } from 'react';
import {Button} from 'reactstrap'
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
      gifUri: ''
  }
  sendGif = () =>{
    axios.post('', {
            name: this.state.name,
            message: this.state.message
        }, { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": " Origin, X-Requested-With, Content-Type, Accept" } })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            alert(error);
        });
  }
  selectRandomGif = () => {
    axios.get('', { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": " Origin, X-Requested-With, Content-Type, Accept" } })
      .then(function (response) {
        this.state.gifUri = response;
      })
      .catch(function (error) {
        alert(error);
      });
  }
  render() {
    return (
      <div className="">
          <h1 className="">Welcome! Send a gif!</h1>
          <Button className="btn"><i className="heart fa fa-heart fa-4x fa-beat"></i>Send some love...</Button>
          <Button className="btn" onClick={this.sendGif}><i className="heart fa fa-heart fa-4x fa-beat"></i>Send some love...</Button>

        <div className=""><Button className="btn1" onClick={this.selectRandomGif}>Select Random Gif</Button></div>
      </div>
    );
  }
}

export default App;
