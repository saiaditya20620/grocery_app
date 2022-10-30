package com.payment.demo.service;

import org.springframework.stereotype.Service;

@Service
public class PaymentService {
	private long otp;
	public long createOtp() {
		return ((long)(Math.random()*9000)+10000);
	}
	public long getOtp() {
		return otp;
	}
	public void setOtp(long otp) {
		this.otp = otp;
	}

}
