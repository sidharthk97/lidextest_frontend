import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-logged',
  templateUrl: './navbar-logged.component.html',
  styleUrls: ['./navbar-logged.component.scss']
})
export class NavbarLoggedComponent {

  flag = false;
  e_id : any;
  name : any;
  role : any;

  constructor(private http: HttpClient, private router: Router )
  {
    if(!!localStorage.getItem('employee_token'))
    {
      this.flag = true;   
      this.e_id = localStorage.getItem('employee_token');
      this.name =  localStorage.getItem('employee_name');   
      this.role =  localStorage.getItem('employee_role'); 
    }
  }

  signout()
  {
    if(this.flag == true)
    {
      localStorage.removeItem('employee_token'); 
      localStorage.removeItem('employee_name');
      localStorage.removeItem('employee_role');
      this.router.navigate(['']);
    }
  }
}
