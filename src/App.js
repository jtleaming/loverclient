import React, { Component } from 'react';
import {Button} from 'reactstrap'
import axios from 'axios';
import './App.css';

const GifContainer = (props) => {
    return(
      <div className="" >
        <iframe title="randomGif" name="gif" src={props.gifUri}/>
      </div>
    )
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        gifUri: '',
        displayGif: false
    };
    this.selectRandomGif = this.selectRandomGif.bind(this);
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
  };
  selectRandomGif = () => {
    axios.get('', { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": " Origin, X-Requested-With, Content-Type, Accept" } })
      .then((response) => {
        this.setState( prevState =>({
          gifUri: 'https://giphy.com/embed/l0OWhnv3eJ3B1tN1S',
          displayGif: !prevState.displayGif
        }));
      })
      .catch(function (error) {
        alert(error);
      });
  };
  render() {
    const {displayGif} = this.state;
    return (
      <div className="">
          <h1 className="">Welcome! Send a gif!</h1>
          <Button className="btn"><i className="heart fa fa-heart fa-4x fa-beat"></i>Send some love...</Button>
          <Button className="btn" onClick={this.sendGif}><i className="heart fa fa-heart fa-4x fa-beat"></i>Send some love...</Button>

        <div className=""><Button className="btn1" onClick={this.selectRandomGif}>Select Random Gif</Button></div>
        {displayGif ?
          <GifContainer gifUri={this.state.gifUri} />:
          null
        }
      </div>
    );
  }
}

export default App;
