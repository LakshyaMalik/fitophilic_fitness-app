import React, { useState } from "react";
import "./login.css";

export const Login=()=> {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Loginsignup">
    
      <div >

      <form className="log" onSubmit={handleSubmit}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        {!isLogin && (
          <div className="input-container">
            <label className="linp" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        )}
        <div className="input-container">
          <label className="linp" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="linp" htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="linp" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </form>
      </div>
        <button className="lbtn" type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      <div>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <br/>
        <button  classname="lbtn sorl" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign up" : "Log in"}
        </button>
      </div>
    </div>
  );
}
