package com.lti.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TBL_NGO")
public class NGO {
	
	@Id
	@GeneratedValue
	private int id;
	private String name;
	private String address;
	private String organizationType;
	private Double contactNo;
	private String projectInCharge;
	
	public NGO() {
	
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

	public String getOrganizationType() {
		return organizationType;
	}

	public void setOrganizationType(String organizationType) {
		this.organizationType = organizationType;
	}

	public Double getContactNo() {
		return contactNo;
	}

	public void setContactNo(Double contactNo) {
		this.contactNo = contactNo;
	}

	public String getProjectInCharge() {
		return projectInCharge;
	}

	public void setProjectInCharge(String projectInCharge) {
		this.projectInCharge = projectInCharge;
	}
}
