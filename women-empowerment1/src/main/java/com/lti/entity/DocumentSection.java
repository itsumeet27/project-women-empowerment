package com.lti.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TBL_DOCUMENT_SECTION")
public class DocumentSection {

	@Id
	@GeneratedValue
	private int id;

	private String adhaarNo;
	private String panCardNo;

	public String getAdhaarNo() {
		return adhaarNo;
	}

	public void setAdhaarNo(String adhaarNo) {
		this.adhaarNo = adhaarNo;
	}

	public String getPanCardNo() {
		return panCardNo;
	}

	public void setPanCardNo(String panCardNo) {
		this.panCardNo = panCardNo;
	}

	public DocumentSection() {
		super();
	}

}
