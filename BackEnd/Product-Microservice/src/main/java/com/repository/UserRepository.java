package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bean.Product;
import com.bean.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	
	@Query("select p from User p where p.id = :id")
	public User ListUsersById(@Param("id")int id);
	
	
	
}
