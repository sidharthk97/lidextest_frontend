import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  EmployeeArray : any[] = [];
  all_employee : any[] = [];
  e_id : number = 0;
  
  emp : any;
  user_id : string = "";
  password : string = "";
  error_msg : string = "";

 
  constructor(private http: HttpClient,private router: Router )
  {
    this.getEmployee();
 
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
        

      }, 2000);

    }
  }

  getEmployee()
  {
    this.http.get("http://127.0.0.1:8000/employee/")
    .subscribe((resultData: any)=>
    {
        this.all_employee = resultData;         
        // console.log(resultData);
    });
  }

  signin()
  {
    for(this.emp of this.all_employee){
      if((this.emp.user_id == this.user_id) && (this.emp.password == this.password))
      {
        this.e_id = this.emp.id;
        this.EmployeeArray = this.emp;
        localStorage.setItem('employee_token', this.e_id.toString())
        localStorage.setItem('employee_name', this.emp.name)
        localStorage.setItem('employee_role', this.emp.role)
        
        if(this.emp.role == 'user')
        {
          this.router.navigate(['/user'])
        }
        if(this.emp.role == 'admin')
        {
          this.router.navigate(['/admin'])
        }
        
      }
      else{
        this.error_msg = 'Incorrect User ID or Password'
      }
    }
  }


}
