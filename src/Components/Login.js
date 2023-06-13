import React, { useState } from "react";
import "./Login.css";
import HeaderComponent from "./Header";
import myImage from "./loginbg.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const [existuser,setexistUser]= useState(""); 
  const [password, setpassword] = useState("");
  const authenticate = (e) => {
    e.preventDefault();
    if (existuser.length === 0||password.length === 0) {
      alert("No fields should be empty");
    } 
    else {
   
      const Login = { existuser, password };
      console.log(Login);
      fetch("http://localhost:8080/login/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Login),
      }).then(response => response.text())
      .then(result => {
        // Handle the response based on the result
        if (result === "Login successful") {
          nav("/list");
        }
        else if( result ==="User not found, Sign up")
        {
          alert("User not found")
        }
        else if( result ==="Invalid password")
        {
          alert("Invalid password")
        }
       
       })
      .catch(error => {
        
        console.error("Error:", error);
        
      });
      
    }
  };

  return (
    <div className="body">
    <img src={myImage} alt="My Image" className="image"/>
      <HeaderComponent />
      <div className="container">
        <div className="cover">
          <h1 id="logintxt">Signin</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setexistUser(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />

            <button onClick={authenticate} className="login-btn" type="submit">
              Login
            </button>
          </form>
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              color: "rgb(139, 136, 55)",
              marginBottom: "6vh",
              marginTop: "-4vh",
            }}
          >
            <h4>No Account? Signup !</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
// <div className="bg">
// <video src={bgvedio}  autoPlay loop muted></video>
// </div>
