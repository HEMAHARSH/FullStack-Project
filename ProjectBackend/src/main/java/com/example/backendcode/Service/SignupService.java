package com.example.backendcode.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backendcode.Entity.SignupEntity;
import com.example.backendcode.Repository.SignupRepo;



@Service
public class SignupService   {
	
	@Autowired
	private SignupRepo sri;
	public List<SignupEntity> getData1()
	{
		return sri.findAll();
	}
	public void saveData1(SignupEntity se)
	{
		sri.saveAndFlush(se);
	}
	
	
	public SignupEntity getSignUpByUser(String user) {
		// TODO Auto-generated method stub
		return sri.findbyUser(user);
	}
	public boolean checkuserexist(String user) {
		// TODO Auto-generated method stub
		return sri.existsByUser(user);
	}
	
}
