var Message = function(prop){
  return (
    <div>
      <div>
        {prop.message.user}
      </div>
      <div>
        {prop.message.text}
      </div>
    </div>
  )
}

export default Message;