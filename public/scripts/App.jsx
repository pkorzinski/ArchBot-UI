import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './MessagesList.jsx';
import Messages from './Messages.jsx';

// bootstrap components are imported from react-bootstrap module
// https://react-bootstrap.github.io/components.html
import { Jumbotron } from 'react-bootstrap';

// create an instance of bootstrap module and fill it with stuff
// bsClass is used for CSS classes
// bsStyle can be used for bootstrap styles
const jumbotronInstance = (
  <Jumbotron>
    <h1 bsClass="jumbo">Welcome to the Dogebot</h1>
  </Jumbotron>
)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      data: []
    };

  }

    // this.dummyData = [
    //   {type:'message',
    //     key: 1,
    //     channel: 'C43214FDSA',
    //     user: 'UASDF@4325FD',
    //     ts: '1473222394.000016',
    //     team: 'T27FSAC90',
    //     text: 'this is message1',
    //     username: 'brogrammer'
    //   },
    //   {type:'message',
    //     key: 2,
    //     channel: 'C43214FDSA',
    //     user: 'UASDF@4325FD',
    //     ts: '1473222394.000016',
    //     team: 'T27FSAC90',
    //     text: 'this is message2',
    //     username: 'brogrammer'
    //   },
    //   {type:'message',
    //     key: 3,
    //     channel: 'C43214FDSA',
    //     user: 'UASDF@4325FD',
    //     ts: '1473222394.000016',
    //     team: 'T27FSAC90',
    //     text: 'this is message3',
    //     username: 'brogrammer'
    //   }
    // ];

  refreshFunction() {
    var self = this;
    fetch("/api/messages/", { method: "GET" })
    .then((response) =>  response.json())
    .then((data) => {
      console.log(data);
      self.setState({data: data});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {
    var self = this;
    fetch("/api/messages/", { method: "GET" })
    .then((response) =>  response.json())
    .then((data) => {
      console.log(data);
      self.setState({data: data});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  // The bootstrap component instance can be added via handlebars inside of the render return
  render(data) {
    if (this.state.data){
      return (
        <div>
          {jumbotronInstance}
          <h1>Your team messages</h1>
          <MessageList data = {this.state.data} refreshFunction = {this.refreshFunction.bind(this)}/>
        </div>
      );
    }
    return (<div>no data!</div>)
  }
}

module.exports = App;






