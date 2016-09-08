//Messages list
import Message from './Messages.jsx';

var MessagesList = (messages) => {

  var refresh = function(){
    messages.refreshFunction();
  }

  return (
    <div className = "message-list">
    <button onClick = {refresh}>refresh</button>
      {messages.data.map(function(message){
        return <Message key={message._id} message={message}/>
      })}
    </div>
  )

}

export default MessagesList;