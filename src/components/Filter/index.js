import React from "react";
import "./style.css";

function Filter(props) {
  return (
    <div className="filter" >
      <div className="form-group form-inline">
        <input
          type="search"
          className="form-control"
          id="searchForm"
          placeholder="Search Users"
          onChange={props.handleInputChange}
        ></input>
      </div>
    </div>
  );
}

export default Filter;