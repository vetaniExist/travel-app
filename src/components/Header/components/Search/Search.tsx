import React from "react";
import magnifierIcon from "../../../../assets/icons/magnifier_icon.svg";

const Search = () => (
    <div className='searchContainer'>
      <input className='inputSearch' contentEditable='true' placeholder='Search' />
      <button className='inputSearchIcon'>
        <img className='imgSearchIcon' src={magnifierIcon}/>
      </button>
    </div>
);

export default Search;
