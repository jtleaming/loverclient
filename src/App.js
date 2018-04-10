import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import './App.css';

class SendGifButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false
        };
    };
    sendGif = function (number) {
        this.setState({loading:true});
        axios.get('http://localhost:5002/api/sendmessage/' + number + '/' + this.props.gifUri, { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": " Origin, X-Requested-With, Content-Type, Accept", 'Access-Control-Allow-Credentials': true, 'Access-Control-Allow-Methods': 'GET' } })
          .then((response) =>  {
            console.log(response);
            this.setState(() => ({ loading: false}));
          })
          .catch((error) => {
              alert(error);
              this.setState(({ loading: false}));
            });
      };
    render(){
        return(
        <row>
                <Button className="btn" onClick={() => this.sendGif(this.props.phoneNumbers)}><i className={this.state.loading ? "heart fa fa-heart fa-4x fa-beat" : "heart fa fa-heart fa-4x"}></i>{this.props.messages}</Button>
        </row>
        );
    }
}

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
      gifUri: '123',
      displayGif: false,
      loading: false,
      phoneNumbers: ['18014140392', '18014034602'],
      messages: ['Send some love to Breana...', 'Send some love to Justin...']
    };
    this.selectRandomGif = this.selectRandomGif.bind(this);
  }
  selectRandomGif = () => {
    axios.get('http://localhost:5000/api/sendgif', { headers: { "Access-Control-Allow-Origin": "http://localhost:3000", "Access-Control-Allow-Headers": " X-Requested-With,content-type", 'Access-Control-Allow-Credentials': true, 'Access-Control-Allow-Methods': 'GET' } })
      .then((response) => {
        this.setState(prevState => ({
          gifUri: response.data,
          displayGif: true
        }));
      })
      .catch(function (error) {
        alert(error);
      });
  };
  render() {
    const { displayGif } = this.state;
    return (
      <div>
        <h1>Welcome! Send a gif!</h1>
        {this.state.phoneNumbers.map((phoneNumber, i)=>
            <SendGifButton key={i} phoneNumbers={phoneNumber} gifUri={this.state.gifUri} messages={this.state.messages[i]}/>
        )}
        <div><Button className="btn1" onClick={this.selectRandomGif}>Select Random Gif</Button></div>
        {displayGif &&
          <GifContainer gifUri={this.state.gifUri} />
        }
      </div>
    );
  }
}

export default App;
