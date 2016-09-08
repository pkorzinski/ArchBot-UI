var Search = (props) => {

  return (
    <button type="button" onClick={props.filterFunc} className="btn btn-default btn-space"><span className="glyphicon glyphicon-search"></span></button>
  )
}

export default Search;