package com.lti.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.validator.constraints.UniqueElements;

@Entity
@Table(name = "TBL_NGO")
public class NGO {

	@Id
	@GeneratedValue
	private int id;

	private String name;

	private String username;
	private String password;
	private String confirmPassword;
	private String address;
	private String organizationType;
	private Double contactNo;
	private String projectInCharge;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

}
