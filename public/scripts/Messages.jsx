var Message = function(props){
  var getUser = function (e){
    var username = e.target.text;
    props.getOneUser(username);
  };

  return (
    <div className="col-sm-4 pull-left">
      <div className="panel panel-primary">
        <div className="panel-heading"><a onClick={ getUser }>{ props.message.user } </a>- { props.message.timestamp }</div>
        <div className="panel-body">
          { props.message.text }
        </div>
      </div>
    </div>
  )
}

export default Message;