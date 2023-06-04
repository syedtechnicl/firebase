import React, { useState } from "react";
const Search = ({ lena }) => {
  const [movies, setmovies] = useState("");

  const submit = () => {
    lena(movies);
  };

const Change=(e)=>{
setmovies(e.currentTarget.value)
}

  return (
    <>
      <input
        type="text"
        placeholder="Search"
    onChange={Change}
      />
      <button onClick={submit}>Search</button>
    </>
  );
};

export default Search;
