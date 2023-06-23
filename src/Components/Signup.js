import React, { useState } from "react";
import "./Signup.css";
import HeaderComponent from "./Header";
import { useNavigate } from "react-router-dom";

function Signup() {
  const nav = useNavigate();
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");
  const [matchpwd, setmatchpwd] = useState("");
  const [pwd, setpwd] = useState("");

  const enter = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const Regex = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+[.]+[a-z]/;
    if (
      user.length === 0 ||
      email.length === 0 ||
      pwd.length === 0 ||
      matchpwd.length === 0
    ) {
      alert("Fill all the fields");
    } else if (pwd !== matchpwd) {
      alert("Password and Confirm Password must be same");
    } else if (!Regex.test(email)) {
      alert("Invalid Email format");
    } else if (!passwordRegex.test(pwd)) {
      alert(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
      );
    } else {
      const Signup = { user, email, pwd, matchpwd };
      console.log(Signup);
      fetch("http://localhost:8080/signup/postsignup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Signup),
      })
      .then((response) => response.text())
       
        .then((result) => {
            if (result === "Signup successful") {
               
                setuser("");
                setemail("");
                setpwd("");
                setmatchpwd("");
                sessionStorage.setItem("user", user);
                sessionStorage.setItem("pwd", pwd);
                console.log("New Signup Added");
            nav("/list");
          } else if (result === "Username already Signed up") {
            alert("User already exists");
          }

        })
        .catch(error => {
        
            console.error("Error:", error);
            
          });
    }
  };
  return (
    <div className="body1">
      <HeaderComponent />
      <div className="cover1">
        <h2 id="signtxt">Create account</h2>
        <form>
          {" "}
          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={(e) => setuser(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email id"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            pattern="^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$"
          />
          <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setpwd(e.target.value)}
            required
            pattern="^(?=.\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={matchpwd}
            onChange={(e) => setmatchpwd(e.target.value)}
            required
          ></input>
          <button className="signup-btn" onClick={enter} type="submit">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
