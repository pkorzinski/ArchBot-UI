import Message from './Message.jsx';

var MessagesList = (props) => {

  var refreshHandler = function(){
    props.refreshAllUser();
  };

  var divStyle = {
    margin: "20px",
    padding: "5px"
  };

  return (
    <div className="message-list">
      <button style={divStyle} className="btn btn-primary btn-lg" onClick={ refreshHandler }>
        Refresh
      </button>
      <div>
      { props.data.map(function(message) {
        return <Message key={ message.key } message={ message } getOneUser={ props.getOneUser }/>
      })}
      </div>
    </div>
  )

}

export default MessagesList;
