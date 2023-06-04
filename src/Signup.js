import React, { useState } from "react";

const Signup = ({signup}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conpass, setconpass] = useState("");
  const [name, setname] = useState("");

  return (
    <>
    <h1>Sign Up</h1>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setemail(e.currentTarget.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setpassword(e.currentTarget.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setconpass(e.currentTarget.value)}
      />
      <br />
      <br />

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setname(e.currentTarget.value)}
      />
    <br />
    <br />
    <button onClick={()=>{signup(email,password,conpass,name)}}>Sign Up</button>
    
    
    </>
  );
};

export default Signup;
