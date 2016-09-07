import React from 'react';
import MessageList from './MessagesList.jsx';
import Messages from './Messages.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:false};
    this.data = [];

    this.dummyData = [
      {type:'message',
        key: 1,
        channel: 'C43214FDSA',
        user: 'UASDF@4325FD',
        ts: '1473222394.000016',
        team: 'T27FSAC90',
        text: 'this is message1',
        username: 'brogrammer'
      },
      {type:'message',
        key: 2,
        channel: 'C43214FDSA',
        user: 'UASDF@4325FD',
        ts: '1473222394.000016',
        team: 'T27FSAC90',
        text: 'this is message2',
        username: 'brogrammer'
      },
      {type:'message',
        key: 3,
        channel: 'C43214FDSA',
        user: 'UASDF@4325FD',
        ts: '1473222394.000016',
        team: 'T27FSAC90',
        text: 'this is message3',
        username: 'brogrammer'
      }
    ];
  }

  componentDidMount() {
    var self = this;
    fetch("/api/messages", { method: "GET" })
      .then(function(res){
        console.log("fetch function called!");
        console.log(res);
        self.data = res;
        self.setState({data:true});
      });
  }

  render(data) {
    if (this.state.data){
      return (
        <div>
          <h1>Your team messages</h1>
          <MessageList data = {this.data}/>
        </div>
      );
    }
    return (<div>no data!</div>)
  }
}

module.exports = App;