package com.youngminds.dao;

import java.util.List;

import com.youngminds.services.modal.User;

public interface UserDao {

	void inserUser(User user);

	User validateUser(User user);

	List<User> showAllUsers();

}
