package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.bean.Odetails;



@Repository
public interface OrderDetailsRepository extends JpaRepository<Odetails,Integer> {
	@Query("select p from Odetails p where p.id= :userid")
	public List<Odetails> ListOdetailsByUserId(@Param("userid") int userid);
	
	@Modifying(clearAutomatically = true)
	@Transactional
	@Query("delete from Odetails p where p.orderid= :orderid")
	public int Delete(@Param("orderid") int orderid);
	

}
