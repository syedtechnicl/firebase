import React from "react";
import { useState } from "react";

const Login = ({login}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
    <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setemail(e.currentTarget.value)}
      />
      <br />
      <br />

      <input
        type="text"
        placeholder="Enter your Password"
        onChange={(e) => setpassword(e.currentTarget.value)}
      />
      <br />
      <br />

<button onClick={()=>{login(email,password)}}>Login</button>
<br />
<br />
    </>
  );
};

export default Login;
