package com.example.backendcode.Controller;

//import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendcode.Service.Services;

import com.example.backendcode.Entity.*;

@RequestMapping("/chocolatelist")
@CrossOrigin("*")
@RestController

public class Controller {
	@Autowired
	private Services cs;
	@GetMapping()
	public List<Chocolates> getData2(){
		return cs.getData2();
	}
	@GetMapping("{id}")
	public Optional<Chocolates> getData21(@PathVariable int id){
		return cs.getData21(id);
	}	
	@PostMapping("/post")
	public Object saveData2(@RequestBody Chocolates choco) {
		return cs.saveData2(choco);
	}
	@PutMapping("/{id}")
	public Chocolates updateData2(@PathVariable int id,@RequestBody Chocolates choco) {
		
	    Chocolates existinguser = cs.getUserbyId(id);
	    if( existinguser != null)
	    {
	    	
	    	System.out.println("Changes Updated");
	    	choco.setId(id);
	    	Chocolates modifiedChoco = cs.updateData22(choco);
	        return modifiedChoco;
	    	
	    }
	    else {
	    	return null;
	    }
	  }
	@DeleteMapping("{id}")
	public String deleteData2(@PathVariable int id) {
		cs.deleteData2(id);
		return "Chocolate with id "+id+" is deleted";
	}
	
	@GetMapping("/getbybrand/{brand}")
	public List<Chocolates> gettingbyBrand(@PathVariable("brand") String brands)
	{
		return cs.getbybrand(brands);
	}
	
	// paging
		//http://localhost:8080/p/0/3
		@GetMapping(value = "/p/{pageNo}/{pageSize}")
		Page<Chocolates> employeesPaging(@PathVariable("pageNo") int pageno, @PathVariable("pageSize") int pageSize) {
			return cs.pagingChocolates(pageno, pageSize);

		}

		// paging and sorting
	//http://localhost:8080/ps/0/4/name
		@GetMapping(value = "/ps/{pageNo}/{pageSize}/{field}")
		Page<Chocolates> employeesPagingAndSorting(@PathVariable("pageNo") int pageno, @PathVariable("pageSize") int pageSize,
				@PathVariable("field") String field) {
			return cs.pagingAndSortingChocolates(pageno, pageSize, field);

		}
		// sorting
		// http://localhost:8080/s/name
		@GetMapping(value = "/s/{field}")
		Iterable<Chocolates> employeesSort(@PathVariable("field") String field) {
			return cs.sortChocolates(field);

		}
}
