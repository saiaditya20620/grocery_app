import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Categories/product';
import { Discount } from '../discount';
import { Myorders } from '../myorders';
import { Odetails } from '../odetails';
import { RestService } from '../rest.service';
import { Sales } from '../sales';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  success:boolean=false;
  constructor(private rest:RestService,private router:Router) { }
  items:Odetails[]=[];
  discounts:Discount[]=[];
  mt:string='';
  ct:string='';
  updateProd!:Product;
  userid:number=0;
  newSales!:Sales;
  newmyord!:Myorders;
  deletingdiscount!:Discount;
  st:string='';
  ut:string='';
  loggedrole:string='';
  stockqnt:number=1;
  cate!:Product;
  ddt:string='';
  maxDiscount:number=0;
  dateObj = new Date();
  month =this.dateObj.getUTCMonth() + 1; //months from 1-12
  day = this.dateObj.getUTCDate();
  year = this.dateObj.getUTCFullYear();
  displayval!:number;
  getvalue(val:any)
  {
    console.warn(val)
    this.displayval=val;
  }
  
newdate = String(this.year + "-" + this.month + "-" +this. day);
  ngOnInit(): void {
    
    this.success=this.rest.getMessage();
    if(this.success){
    this.userid=this.rest.getLoggedinUserDetails()["id"];
    this.rest.getUserOrders(this.userid).subscribe(
      (response)=>
      {
          this.items=response;
      }
    );
    this.rest.getmaxDiscount(this.userid).subscribe(
      (response)=>{
        this.maxDiscount=response;
      }
    )
    }
    console.log(this.items);
    this.rest.getUserDiscounts(this.rest.getLoggedinUserDetails()["id"]).subscribe(
      (response)=>
      {
          this.discounts=response;
      }
    );
    
    
  }
 addmore(){
  this.router.navigateByUrl('/home');
 }
 disdown(percentage:number){
  this.maxDiscount=percentage;
 }


 selected:number=0;
  
  update(e:any){
    this.selected = e.target.value
  }
  delete(orderid:any)
  {
    console.log(orderid)
    console.log(this.items)
    console.log(this.items)
    this.rest.deleteCart(orderid).subscribe(
      (response)=>{
        console.log(response);
      }
    )
   this.reloadCurrentPage()

   
    
  }
  reloadCurrentPage(){
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]);
    });
  }

 addsales(it:Odetails){
  this.loggedrole=this.rest.getLoggedinUserDetails()["role"];
  
  this.newSales={
    "sid":Math.floor(Math.random() * 100000),
    "datedetails":this.newdate,
    "id":this.rest.getLoggedinUserDetails()["id"],
    "pid":it.pid,
    "pname":it.pname,
    "category":it.category,
    "stockquantity":this.stockqnt,
    "price":Number(it.price * this.stockqnt*(100-this.selected)/100)
  }
  this.newmyord={
    "mid":Math.floor(Math.random() * 100000),
    "orderid":it.orderid,
    "id":this.rest.getLoggedinUserDetails()["id"],
    "pid":it.pid,
    "pname":it.pname,
    "description":it.description,
    "price":Number(it.price * this.stockqnt*(100-this.selected)/100),
    "address":it.address,
    "email":it.email,
    "image":it.image,
    "datedetails":this.newdate,
    "category":it.category
  }
  this.updateProd={
    "pid":it.pid,
    "pname":it.pname,
    "description":it.description,
    "price":it.price,
    "image":it.image,
    "stockquantity":this.stockqnt,
    "discount":it.discount,
    "category":it.category
  }
  console.log(this.newSales);
  this.rest.addsales(this.newSales).subscribe(result=> {
    //alert(result);
    this.st=result;
  });
  this.rest.getusedDiscount(this.rest.getLoggedinUserDetails()["id"],this.selected).subscribe(
    (response)=>{
      this.deletingdiscount=response;
    }
    
  )
  console.log(this.deletingdiscount);

  this.rest.updateStocks(this.updateProd).subscribe(result=> {
    //alert(result);
    this.ut=result;
  });

  this.rest.storeMyOrderdetails(this.newmyord).subscribe(result=>{
    this.mt=result;
    console.log(result)
  })
  this.rest.deleteCart(it.orderid).subscribe(result=>
    {
      this.ct=result;
    })
  alert("product ordered successfully");
  this.delete(it.orderid)
  this.router.navigateByUrl('/myorders');

 }

}
