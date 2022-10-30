import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { User } from '../user';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class updateuserComponent implements OnInit {

  newuser!:User;
  editUser=new FormGroup({ 
    id:new FormControl<number|null>(null),
    username:new FormControl<string|null>(null),
    email:new FormControl<string|null>(null),
    password:new FormControl<string|null>(null),
    phone:new FormControl<string|null>(null),
    address:new FormControl<string|null>(null),
    role:new FormControl<string|null>(null)})

  constructor(private rest:RestService,private router:Router,private activate:ActivatedRoute) { }

  ngOnInit(): void {
    console.warn(this.activate.snapshot.params['id'])
    this.rest.getUserById(this.activate.snapshot.params['id']).subscribe((result)=>
    {
      console.warn("result",result)
      this.editUser=new FormGroup({ 
        id:new FormControl(result['id']),
        username:new FormControl(result['username']),
        email:new FormControl(result['email']),
        password:new FormControl(result['password']),
        phone:new FormControl(result['phone']),
        address:new FormControl(result['address']),
        role:new FormControl(result['role'])
        })
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
    console.warn(this.editUser.value)
    this.newuser={
      "id":this.editUser.value.id!,
      "username":this.editUser.value.username!,
      "email":this.editUser.value.email!,
      "password":this.editUser.value.password!,
      "phone":this.editUser.value.phone!,
      "address":this.editUser.value.address!,
       "role":this.editUser.value.role!,
      
    }
    console.log(this.newuser)
    this.rest.updatenewUser(this.newuser.id,this.newuser).subscribe((result)=>
    console.warn("result",result))
    console.log("updated")
    alert("user updated successful");
    this.router.navigate(['/adminusers']);
  
    
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
