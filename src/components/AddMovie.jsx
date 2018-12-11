import React from 'react';

var AddMovie = (props) => (
  <div className="add-movie">
    <form>
      <label>
        <input type="text" name="name" />
        <input type="submit" value="Add" />
    </label>
    </form>
  </div>
)

export default AddMovie;
