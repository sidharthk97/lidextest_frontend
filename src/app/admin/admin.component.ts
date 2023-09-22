import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  
  leaveArray : any[] = [];
  approve_count : number = 0;
  reject_count : number = 0;
  pending_count : number = 0;
  total_leave_count : number = 0;
  k :any;
  
  constructor(private http: HttpClient )
  {
    this.getAllLeave();
 
  }

  refresh()
  {
    window.location.reload();
  }
  getlist()
  {
    this.http.get("http://127.0.0.1:8000/employee/leave/")
    .subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.leaveArray = resultData;
    });
  }

  getAllLeave()
  {
    this.http.get("http://127.0.0.1:8000/employee/leave/")
    .subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.leaveArray = resultData;

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

    localStorage.setItem('admin_approve_count', this.approve_count.toString())
    localStorage.setItem('admin_reject_count', this.reject_count.toString())
    localStorage.setItem('admin_pending_count', this.pending_count.toString())
    });
  }

   
  set_approve(data: any)
  {
    let bodyData = 
    {
      "name" : data.name,
      "reason" : data.reason,
      "from_date" : data.from_date,
      "to_date" : data.to_date,
      "e_id" : data.e_id,
      "status" : "Approved"
      
    };
    
    this.http.put("http://127.0.0.1:8000/employee/leave/"+ data.id, bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.getlist();
        alert("Leave Application Approved")
        
    });
    
  }

  set_reject(data: any)
  {
    let bodyData = 
    {
      "name" : data.name,
      "reason" : data.reason,
      "from_date" : data.from_date,
      "to_date" : data.to_date,
      "e_id" : data.e_id,
      "status" : "Rejected"
      
    };
    
    this.http.put("http://127.0.0.1:8000/employee/leave/"+ data.id, bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        
        alert("Leave Application Rejected")
        
        this.getlist();
    });
    
  }


}
