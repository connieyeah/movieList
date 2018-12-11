import React from 'react';

var Search = (props) => (
    <form className="search-bar" onSubmit={props.handleSubmit}>
      <input type="text" placeholder="Search title..." value={props.searchedMovie} onChange={props.handleSearch}/>
      <input type="submit" value="Search" />
    </form>
  ); 

export default Search;

