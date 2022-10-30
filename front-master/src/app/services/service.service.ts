import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Otp } from '../otp';
import { Paymentclass } from '../paymentclass';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

sendPaydetails(pay:Paymentclass){
  return this.http.post("http://localhost:8484/pay/savepayment",pay);
}
getOtp(){
  return this.http.get("http://localhost:8484/pay/getOtp");
}
sendOtp(otp:Otp){
  return this.http.post("http://localhost:8484/pay/sendOtp",otp);
}

}