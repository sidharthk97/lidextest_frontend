import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent {

  name : string = "";
  place : string = "";
  user_id : string = "";
  password : string = "";
  role : string = "";
  
  constructor(private http: HttpClient,private router: Router )
  {
  }

  ngOnInit(){
    if(!!localStorage.getItem('employee_token')){
      //  !! used to check whether already exists
      setTimeout(()=>{

        if((localStorage.getItem('employee_role'))=='user')
        {
          this.router.navigate(['/user'])
        // router: Router in constructor
        }
        if((localStorage.getItem('employee_role'))=='admin')
        {
          this.router.navigate(['/admin'])
        // router: Router in constructor
        }
        
      }, 6000);

    }
  }

  signup()
  { 
    let bodyData = {
      "name" : this.name,
      "place" : this.place,
      "user_id" : this.user_id,
      "password" : this.password,
      "role" : this.role 
    };

    if((this.name==null) || (this.name==""))
    {
      alert("Name required");
      this.router.navigate(['/signup']);
    }
    else if((this.place==null) || (this.place==""))
    {
      alert("Place required");
      this.router.navigate(['/signup']);
    }
    else if((this.role==null) || (this.role==""))
    {
      alert("Role required");
      this.router.navigate(['/signup']);
    }
    else if((this.user_id==null) || (this.user_id==""))
    {
      alert("UserID required");
      this.router.navigate(['/signup']);
    }
    else if((this.password==null) || (this.password==""))
    {
      alert("Password required");
      this.router.navigate(['/signup']);
    }
    
    else
    {
      this.http.post("http://127.0.0.1:8000/employee/",bodyData).subscribe((resultData: any)=>
        {
            console.log(resultData);
            alert("Employee Registered Successfully");
            this.router.navigate([''])
            
        });

    }
 

  }


  
}
