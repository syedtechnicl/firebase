import React from "react";

const Home = ({logout}) => {
  return (
    <>
      <center>
        <h1>welcome to our new website</h1>
        <button onClick={logout}>Logout</button>
      </center>
    </>
  );
};

export default Home;
