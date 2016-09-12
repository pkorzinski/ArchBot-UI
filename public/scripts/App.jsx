import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './MessagesList.jsx';
import Search from './Search.jsx';
// bootstrap components are imported from react-bootstrap module
// https://react-bootstrap.github.io/components.html
import { Jumbotron } from 'react-bootstrap';

// create an instance of bootstrap module and fill it with stuff
// bsClass is used for CSS classes
// bsStyle can be used for bootstrap styles
const jumbotronInstance = (
  <Jumbotron>
    <span>
      <h1 className="row text-center jumbo">
        <img src="/images/fancyDoge.png"/>
        Such Dashboard Wow
        <img src="/images/fancyDoge.png"/>
      </h1>
    </span>
  </Jumbotron>
)

// Only App component is stateful
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      data: [],
      unfilteredData: [],
      teamCode: props.teamCode
    };

  }

////// API REQUESTS ////////////////////////////////////////////////////

  // handles GET for all user is no argument; otherwise GET all users
  fetchAPI(username){
    // condition for using API with or without adding username
    var addUserToUrl = username || "";
    var self = this;

    if (self.state.teamCode) {
      // if (addUserToUrl) {
      //   fetch('api/messages/' + self.state.teamCode + '/' + addUserToUrl , { method: 'GET' })
      //     .then((response) =>  response.json())
      //     .then((data) => {
      //       console.log(data);
      //       self.setState({ data: data });
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
      // } else {
        console.log('INSIDE ELSE', self.state.teamCode);
        fetch("/api/messages/team/" + self.state.teamCode, { method: "GET" })
          .then((response) =>  response.json())
          .then((data) => {
            console.log(data);
            self.setState({ data: data });
          })
          .catch((error) => {
            console.error(error);
          });
      //}
    }
  }

  getOneUser(username){
    this.fetchAPI(username)
  }

  refreshAllUser() {
    this.fetchAPI()
  }

////// END API REQUESTS //////////////////////////////////////////////////

  filterFunction() {
    if (this.state.data.length > this.state.unfilteredData.length) {
      this.state.unfilteredData = this.state.data.slice(0)
    }
    this.setState({ data: this.state.unfilteredData })
    var input = document.getElementById('input').value;
    var filtered = [];
    this.state.unfilteredData.forEach(function(el){
      if (el.text.includes(input)) {
        filtered.push(el)
      }
    })
    this.setState({data: filtered})
  }

  componentDidMount() {
    // adds Search component to navbar in HTML which is defined outside of React file structure.
    ReactDOM.render(<Search filterFunc={ this.filterFunction.bind(this) }/>, document.getElementById('form'))
    this.fetchAPI()
  }

  render(data) {
      // The bootstrap component instance can be added via handlebars inside of the render return
      return (
        <div>
          { jumbotronInstance }
          <h1>&nbsp;&nbsp;Messages</h1>
          <MessageList data = { this.state.data } refreshAllUser = { this.refreshAllUser.bind(this) } getOneUser={ this.getOneUser.bind(this) }/>
        </div>
      );
  }
}

module.exports = App;
