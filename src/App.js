import React, { Component } from 'react';
import { Button } from 'reactstrap'
import axios from 'axios';
import './App.css';

const GifContainer = (props) => {
  const gif = 'https://giphy.com/embed/' + props.gifUri;
  return (
    <div className="" >
      <iframe title="randomGif" name="gif" src={gif} />
    </div>
  )
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifUri: '',
      displayGif: false
    };
    this.selectRandomGif = this.selectRandomGif.bind(this);
  }
  sendGif = (number) => {
    axios.get('http://localhost:5002/api/sendmessage/' + number + '/' + this.state.gifUri, { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": " Origin, X-Requested-With, Content-Type, Accept" } })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        alert(error);
      });
  };
  selectRandomGif = () => {
    axios.get('http://localhost:5000/api/sendgif', { headers: { "Access-Control-Allow-Origin": "http://localhost:3000", "Access-Control-Allow-Headers": " X-Requested-With,content-type", 'Access-Control-Allow-Credentials': true, 'Access-Control-Allow-Methods': 'GET' } })
      .then((response) => {
        this.setState(prevState => ({
          gifUri: response.data,
          displayGif: !prevState.displayGif
        }));
      })
      .catch(function (error) {
        alert(error);
      });
  };
  render() {
    const { displayGif } = this.state;
    return (
      <div className="">
        <h1 className="">Welcome! Send a gif!</h1>
        <Button className="btn" onClick={() => this.sendGif('18014140392')}><i className="heart fa fa-heart fa-4x fa-beat"></i>Send some love to Breana...</Button>
        <Button className="btn" onClick={() => this.sendGif('18014034602')}><i className="heart fa fa-heart fa-4x fa-beat"></i>Send some love Justin...</Button>

        <div className=""><Button className="btn1" onClick={this.selectRandomGif}>Select Random Gif</Button></div>
        {displayGif ?
          <GifContainer gifUri={this.state.gifUri} /> :
          null
        }
      </div>
    );
  }
}

export default App;
