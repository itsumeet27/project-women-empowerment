package com.lti.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TBL_USER_FAMILY")
public class UserFamilyDetails {

	@Id
	@GeneratedValue
	private int id;

	private int noOfMembers;
	private int noOfChildren;
	private String criteria;
	private long annualIncome;

	public int getNoOfMembers() {
		return noOfMembers;
	}

	public void setNoOfMembers(int noOfMembers) {
		this.noOfMembers = noOfMembers;
	}

	public int getNoOfChildren() {
		return noOfChildren;
	}

	public void setNoOfChildren(int noOfChildren) {
		this.noOfChildren = noOfChildren;
	}

	public String getCriteria() {
		return criteria;
	}

	public void setCriteria(String criteria) {
		this.criteria = criteria;
	}

	public long getAnnualIncome() {
		return annualIncome;
	}

	public void setAnnualIncome(long annualIncome) {
		this.annualIncome = annualIncome;
	}

	public UserFamilyDetails() {
		super();
	}

}
