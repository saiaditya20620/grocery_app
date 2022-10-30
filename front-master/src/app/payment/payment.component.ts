import { transition } from '@angular/animations';
import { Component, OnInit, Optional } from '@angular/core';
import { Checkotp } from '../checkotp';
import { Otp } from '../otp';
import { Paymentclass } from '../paymentclass';
import { RestService } from '../rest.service';
import { ServiceService } from '../services/service.service';
import { User } from '../user';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment:Paymentclass=new Paymentclass();
pa:boolean=false;
  otp:Otp=new Otp();
  tp:boolean=false;
  check:any;
  otpc:any;
  constructor(private service:ServiceService,private rest:RestService) { }

  ngOnInit(): void {
    this.rest.getLoggedinUserDetails()
  }
  paySubmit(){
    this.pa=true;
    this.service.sendPaydetails(this.payment).subscribe(data=>{
      console.log(data)
      alert("Payment details saved");
      this.service.sendOtp(this.otp).subscribe(data=>{
        console.log(data);
        alert("email sent")
      }
        )
      
  })
  }
  checkOtp(){
    this.service.getOtp().subscribe(response=>{
      this.check=response;
      console.log(response);
      if(this.otpc==this.check){
        alert("transaction successful");
      }
      else{
        alert("transaction failed");
    }
    })
  }
  
  

}
