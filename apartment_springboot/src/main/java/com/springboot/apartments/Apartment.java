package com.springboot.apartments;

import javax.persistence.*;

@Entity
@Table(name = "apartment")
public class Apartment {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @Column
    private String address;

    @Column
    private String estateAgent;

    @Column
    private String dateAvailable;

    @Column
    private int price;
	
    public int getId() {
		return id;
	}
	
    public void setId(int id) {
		this.id = id;
	}
	
    public String getName() {
		return name;
	}
	
    public void setName(String name) {
		this.name = name;
	}
	
    public String getAddress() {
		return address;
	}
	
	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getEstateAgent() {
		return estateAgent;
	}
	
	public void setEstateAgent(String estateAgent) {
		this.estateAgent = estateAgent;
	}
	
	public String getDateAvailable() {
		return dateAvailable;
	}
	
	public void setDateAvailable(String dateAvailable) {
		this.dateAvailable = dateAvailable;
	}
	
	public int getPrice() {
		return price;
	}
	
	public void setPrice(int price) {
		this.price = price;
	}
        
}