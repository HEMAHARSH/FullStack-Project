package com.example.backendcode.Repository;
//import java.util.List;
//import java.util.Optional;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.example.backendcode.Entity.*;
@Repository
public interface Repositor extends PagingAndSortingRepository<Chocolates, Integer>,JpaRepository<Chocolates, Integer>{

	
@Query("Select cho from Chocolates cho where cho.brand=?1")
public List<Chocolates> getbyrating(String brand);



	
	
}
