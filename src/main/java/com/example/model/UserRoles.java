package com.example.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter @Setter
@NoArgsConstructor
@ToString
@Entity
@JsonIgnoreProperties(value= {"hibernateLazyInitializer", "handler"})
@Table(name="user_roles")
public class UserRoles {

	@Id
	@Column(name="role_id")
	private int roleId;
	
	@Column(name="user_role")
	private String userRole;
	
	@OneToMany(mappedBy="userRoles", fetch=FetchType.LAZY)
	private List<User> uList = new ArrayList<User>();
	
	public UserRoles(String userRole, List<User> uList) {
		super();
		this.userRole = userRole;
		this.uList = uList;
	}


	public UserRoles(int roleId, String userRole) {
		super();
		this.roleId = roleId;
		this.userRole = userRole;
	}



	public UserRoles(String userRole) {
		super();
		this.userRole = userRole;
	}


}
