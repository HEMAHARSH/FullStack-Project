

package com.example.backendcode.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.backendcode.Entity.*;
import com.example.backendcode.Repository.*;



@Service
public class Services {
	@Autowired
	private Repositor r;
	public List<Chocolates> getData2(){
		return r.findAll();
	}
	public Chocolates getUserbyId(int id)
	{
		return r.findById(id).orElse(null);
	}
	public Chocolates updateData22(Chocolates choco) {
		
		return r.saveAndFlush(choco);
	}
	public Optional<Chocolates> getData21(int id){
		return r.findById(id);
	}
	public Object saveData2(Chocolates fle ) {
		return r.save(fle);
	}
	public void deleteData2(int id) {
		r.deleteById(id);
	}
	public List<Chocolates> getbybrand(String brand)
	{
		return r.getbyrating(brand);
	}
	public Iterable<Chocolates> sortChocolates(String field) {
		
	     return r.findAll(Sort.by(field));
	}
	public Page<Chocolates> pagingChocolates(int page,int pageSize) {
		Pageable paging = PageRequest.of(page, pageSize);
			return r.findAll(paging);
		}
	
	public Page<Chocolates> pagingAndSortingChocolates(int offset,int pageSize,String field) {
		Pageable paging = PageRequest.of(offset, pageSize).withSort(Sort.by(field));
			return r.findAll(paging);
		}
	

	    
	}

    	

