import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent {

  leaveArray : any[] = [];
  all_leave: any[] = [];
  e_id : any;
  emp : any;
  k:any;
  name: any;
  reason : string ="";
  from_date : string ="";
  to_date : string ="";
  status : string ="";
  leave_id : string ="";
  approve_count : number = 0;
  reject_count : number = 0;
  pending_count : number = 0;
  total_leave_count : number = 0;
 
  constructor(private http: HttpClient, private router: Router )
  {
    if(!!localStorage.getItem('employee_token'))
    {
      this.e_id = localStorage.getItem('employee_token');
      this.name =  localStorage.getItem('employee_name');
      this.get_employee_leave();
      
    } 
    
  }

  
  
  get_employee_leave()
  {
    this.approve_count = this.reject_count = 0 
    this.pending_count = this.total_leave_count = 0;

    this.http.get("http://127.0.0.1:8000/employee/leave/")
    .subscribe((resultData: any)=>
    {
      this.all_leave = resultData;
      let i = 0;
      for(this.emp of this.all_leave)
      {
        if(this.emp.e_id == this.e_id)
        {
          console.log(this.all_leave,"employee id matches with local storage");
          this.name = this.emp.name;
          this.leaveArray[i] = this.emp;
          i++;
        }
      }

    for(this.k of this.leaveArray)
    { 
      console.log("total_leave_count:",this.total_leave_count);
      this.total_leave_count++;

      if (this.k.status =='Approved')
        {
          console.log("approve_count:",this.approve_count);
          this.approve_count++;
        }
      else if(this.k.status =='Rejected')
      {
        this.reject_count++;
      }
      else if(this.k.status =='Pending')
      {
        this.pending_count++;
      }   

    }

    localStorage.setItem('user_approve_count', this.approve_count.toString())
    localStorage.setItem('user_reject_count', this.reject_count.toString())
    localStorage.setItem('user_pending_count', this.pending_count.toString())

          
    });
    
  }

  
 
  saveRecords()
  {
    let bodyData = 
    {
      "name" : this.name,
      "reason" : this.reason,
      "from_date" : this.from_date,
      "to_date" : this.to_date,
      "status" : "Pending",
      "e_id" : this.e_id
      
    };

    this.http.post("http://127.0.0.1:8000/employee/leave/",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Leave Application created successfully");
        this.get_employee_leave();
        this.reason = "";
        this.from_date = "";
        this.to_date = "";
    });
  }

  UpdateRecords()
  { 
    let bodyData = 
    {
      "name" : this.name,
      "reason" : this.reason,
      "from_date" : this.from_date,
      "to_date" : this.to_date,
      "status" : "Pending",
      "e_id" : this.e_id
            
    };
    
    console.log(this.leave_id,"asaqsa");
    this.http.put("http://127.0.0.1:8000/employee/leave/"+ this.leave_id, bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.get_employee_leave();
        alert("Leave Application Updated")
        this.reason = "";
        this.from_date = "";
        this.to_date = "";
        
    });
    this.refresh();
  }


  setUpdate(data: any)
  { 
      this.name = data.name;
      this.reason = data.reason;
      this.from_date = data.from_date;
      this.to_date = data.to_date;
      this.leave_id = data.id
     
  }
 
  refresh()
  {
    window.location.reload();
  }

  setDelete(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/employee/leave"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.get_employee_leave();
        alert("Leave Application Deleted")
        this.refresh();
    });
 
  }
 
  
 


}
