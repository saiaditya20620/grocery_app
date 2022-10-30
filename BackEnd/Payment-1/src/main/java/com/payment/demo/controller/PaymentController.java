package com.payment.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.payment.demo.Bean.EmailDetails;
import com.payment.demo.Bean.PaymentBean;
import com.payment.demo.Bean.User;
import com.payment.demo.repository.PaymentRepository;
import com.payment.demo.repository.UserRepository;
import com.payment.demo.service.EmailService;
import com.payment.demo.service.PaymentService;

@RestController
@CrossOrigin
@RequestMapping("/pay")
public class PaymentController {
	@Autowired
	private PaymentRepository payrepo;
	@Autowired
	private UserRepository userrepo;
	@Autowired private EmailService emailService;
	@Autowired private PaymentService payservice;
	@PostMapping("/savepayment")
	public PaymentBean saveTransaction(@RequestBody PaymentBean pay) {
		PaymentBean save=payrepo.save(pay);
		return save;
	}
	@PostMapping("/getUser")
	public User saveUser(@RequestBody User user) {
		User save=userrepo.save(user);
		return save;
	}
	@PostMapping("/sendOtp")
	public String sendOtp(@RequestBody EmailDetails details) {
		String status =emailService.sendOtp(details);
		return status;
		
	}
	@GetMapping("/getOtp")
	public String getOtp() {
		String otp= String.valueOf(payservice.getOtp());
		return otp;
		
	}

}
