package com.example.backendcode.Controller;

//import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendcode.Controller.LoginController.UserLoginRequest;
import com.example.backendcode.Entity.*;
import com.example.backendcode.Service.*;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/signup")
@RestController
public class SignupController {

	
	@Autowired
	private SignupService ss;
	
	
	@GetMapping("/getsignup")
	public List<SignupEntity> getData1(){
		return ss.getData1();
	}
	@PostMapping("/postsignup")
	public String saveData1(@RequestBody SignupEntity se) {
		
		boolean userexist = ss.checkuserexist(se.getUser());
		    if(userexist)
		    {
		    	return "Username already Signed up";
		    }
		    
		    ss.saveData1(se);
		    return "Signup successful";
		}
		  
	

}
