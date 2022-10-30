package com.payment.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.payment.demo.Bean.PaymentBean;

@Repository
public interface PaymentRepository extends JpaRepository<PaymentBean,Integer>{

}
