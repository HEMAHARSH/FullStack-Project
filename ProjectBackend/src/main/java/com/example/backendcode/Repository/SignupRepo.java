package com.example.backendcode.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.backendcode.Entity.SignupEntity;
@Repository
public interface SignupRepo extends JpaRepository<SignupEntity, Integer> {
    
	@Query("Select s from SignupEntity s where s.user=?1")
	public SignupEntity findbyUser(String user);
 
	@Query("SELECT CASE WHEN COUNT(s) > 0 THEN true ELSE false END FROM SignupEntity s WHERE s.user = ?1")
   public boolean existsByUser(String user);
	
}
