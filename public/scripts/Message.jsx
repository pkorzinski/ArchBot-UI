var Message = function(props){
  var getUser = function (e){
    var username = e.target.text;
    props.getOneUser(username);
  };

  // this is the React approach to inline styles
  // https://facebook.github.io/react/tips/inline-styles.html
  var inlineLinkStyle = {
    color: "white"
  }

  return (
    <div className="col-sm-4 pull-left message">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <a onClick={ getUser } style={inlineLinkStyle}>{ props.message.user } </a>
          - { props.message.timestamp }
        </div>
        <div className="panel-body">
          { props.message.text }
        </div>
      </div>
    </div>
  )
}

export default Message;
