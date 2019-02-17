package com.lti.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TBL_USER_COURSE")
public class UserCourse {

	@Id
	@GeneratedValue
	private int id;
	private Double mobileNumber;
	private String name;
	private String ngoName;
	private String course;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Double getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(Double mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getName() {
		return name;
	}

	public void setName(String uname) {
		this.name = uname;
	}

	public String getNgoName() {
		return ngoName;
	}

	public void setNgoName(String ngoName) {
		this.ngoName = ngoName;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public UserCourse() {
		super();
	}
}
