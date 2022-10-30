package com.payment.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.payment.demo.Bean.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>{

}
