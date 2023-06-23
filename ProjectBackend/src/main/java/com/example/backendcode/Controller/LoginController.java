package com.example.backendcode.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendcode.Entity.*;
import com.example.backendcode.Service.*;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {

	
	@Autowired
public SignupService sss;
	
	@PostMapping("/check")
	public String login(@RequestBody UserLoginRequest loginRequest) {
	    String existuser = loginRequest.getExistuser();
	    String password = loginRequest.getPassword();

	    SignupEntity exist = sss.getSignUpByUser(existuser);
	    if(exist==null)
	    {
	    	return "User not found";
	    }
	    if (!password.equals(exist.getPwd())) {
	        return "Invalid password";
	    }
	    return "Login successful";
	}
	

	static class UserLoginRequest {
        private String existuser;
        private String password;
        public UserLoginRequest(String existuser, String password) {
			this.existuser = existuser;
			this.password = password;
		}

		public String getExistuser() {
			return existuser;
		}

		public void setExistuser(String existuser) {
			this.existuser = existuser;
		}


      
        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
	
	 
}
