package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Discussion;
import com.example.model.User;
import com.example.repository.UserRepo;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class UserService {
	
	private UserRepo uDao;
	
	public boolean registerUser(User u) {
		try {
			uDao.save(u);
			return true;
		} catch(Exception e) {
			return false;
		}
	}
	
	public User loginUser(String username, String password) {
		//findByUsername will return null if the user does not exist
		User u = uDao.findByUsername(username);
		//If username does not exist return null
		if(u == null) {
			return null;
		}
		else {
			//If you user exists but password is wrong return null
			if(!u.getPassword().equals(password)) {
				return null;
			}
			//Else return the logged in user
			else {
				return u;
			}
		}
	}
	
	public User displayUser(String username) {
		User u = uDao.findByUsername(username);
		if(u == null) {
			return null;
		}
		else {
			return u;
		}
	}
	
	public User getUserById(int id) {
		return uDao.getById(id);
	}
	
	public List<Discussion> getUserPosts(int id){
		User u = uDao.getById(id);
		return u.getDiscussions();
	}
	
}