//messages

var Message = function(prop){

  return (

  <div>

    <div>
      {prop.message.username}
    </div>
    <div>
      {prop.message.text}
    </div>

  </div>

  )

}

export default Message;