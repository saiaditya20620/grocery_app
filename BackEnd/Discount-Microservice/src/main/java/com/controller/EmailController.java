package com.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bean.EmailDetails;
import com.service.EmailService;

//Annotation
@RestController
//Class
public class EmailController {

 @Autowired private EmailService emailService;
@CrossOrigin
 // Sending a simple Email
 @PostMapping("/sendMail")
 public String
 sendMail(@RequestBody EmailDetails details)
 {
     String status
         = emailService.sendSimpleMail(details);

     return status;
 }

 // Sending email with attachment
 @PostMapping("/sendMailWithAttachment")
 public String sendMailWithAttachment(
     @RequestBody EmailDetails details)
 {
     String status
         = emailService.sendMailWithAttachment(details);

     return status;
 }
 @PostMapping("/sendOtp")
 public String sendOtp(@RequestBody EmailDetails details) {
 	String status =emailService.sendOtp(details);
 	return status;
 	
 }
}
