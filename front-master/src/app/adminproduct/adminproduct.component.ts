import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Categories/product';
import { FormControl, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent implements OnInit {
  newProduct!:Product;
  editProduct=new FormGroup({ 
    Pid:new FormControl<number|null>(null),
    Pname:new FormControl<string|null>(null),
    Description:new FormControl<string|null>(null),
    Price:new FormControl<number|null>(null),
    Image:new FormControl<string|null>(null),
    Stockquantity:new FormControl<number|null>(null),
    Discount:new FormControl<number|null>(null),
    Category:new FormControl<string|null>(null)})

  constructor(private rest:RestService,private router:Router,private activate:ActivatedRoute) { }
  ngOnInit(): void {
    console.warn(this.activate.snapshot.params['id'])
    this.rest.getProductById(this.activate.snapshot.params['id']).subscribe((result)=>
    {
      console.warn("result",result)
      this.editProduct=new FormGroup({ 
        Pid:new FormControl(result['pid']),
        Pname:new FormControl(result['pname']),
        Description:new FormControl(result['description']),
        Price:new FormControl(result['price']),
        Image:new FormControl(result['image']),
        Stockquantity:new FormControl(result['stockquantity']),
        Discount:new FormControl(result['discount']),
        Category:new FormControl(result['category']),})
    }
    )
    // this.success=this.rest.getMessage();

    // if(this.success){
    //   this.rest.getProducts().subscribe(
    //     (response)=>
    //     {
    //         this.items=response;
    //     }
    //   );
    // }
  }
  collection()
  {
    console.warn(this.editProduct.value)
    this.newProduct={
      "pid":this.editProduct.value.Pid!,
      "pname":this.editProduct.value.Pname!,
      "description":this.editProduct.value.Description!,
      "price":this.editProduct.value.Price!,
      "image":this.editProduct.value.Image!,
      "stockquantity":this.editProduct.value.Stockquantity!,
       "discount":this.editProduct.value.Discount!,
      "category":this.editProduct.value.Category!
      
    }
    console.log(this.newProduct)
    this.rest.updateProduct(this.newProduct.pid,this.newProduct).subscribe((result)=>
    console.warn("result",result))
    console.log("updated")
    alert("product updated successful");
    this.router.navigate(['/admincrud']);
  
    
  }
  
  // updprod(){

  //   this.newprod={
      // "pid":this.pid,
      // "pname":this.oldProd["pname"],
      // "description":this.oldProd["description"],
      // "price":this.price,
      // "image":this.oldProd["image"],
      // "stockquantity":this.stockquantity,
      // "discount":this.oldProd["discount"],
      // "category":this.oldProd["category"]
  //   }
    
   
  //     console.log("new product details");
      // console.log(this.newprod);
      // this.rest.updateProd(this.newprod).subscribe(result=> {
      //   //alert(result);
      //   this.st=result;
      // });
      // alert('Updated details successfully')
      // this.router.navigateByUrl("/admincrud");
    
  // }
  

}
