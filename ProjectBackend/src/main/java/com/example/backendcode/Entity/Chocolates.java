package com.example.backendcode.Entity;

//import org.hibernate.annotations.Cascade;
//import org.springframework.boot.autoconfigure.amqp.RabbitConnectionDetails.Address;

 
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="chocolates")
public class Chocolates {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String chocolatename;
	private String brand;
	private String quantity;
	private String shape;
	@Column(name="core_ingredient_1")
	private String c1;
	@Column(name="core_ingredient_2")
	private String c2;
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getChocolatename() {
		return chocolatename;
	}
	public void setChocolatename(String chocolatename) {
		this.chocolatename = chocolatename;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	
	public String getShape() {
		return shape;
	}
	public void setShape(String shape) {
		this.shape = shape;
	}
	public String getC1() {
		return c1;
	}
	public void setC1(String c1) {
		this.c1 = c1;
	}
	public String getC2() {
		return c2;
	}
	public void setC2(String c2) {
		this.c2 = c2;
	}
	
	
	
		
}
