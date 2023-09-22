import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';




@Component({
  selector: 'app-user-piechart',
  
  templateUrl: './user-piechart.component.html',
  styleUrls: ['./user-piechart.component.scss']
})


export class UserPiechartComponent implements OnInit {
  
 ngOnInit(): void {
    this.createChart();
    
    
  }
  public chart: any;
  approve_count : any;
  reject_count : any;
  pending_count: any;

  
  createChart() {
    
    this.approve_count = localStorage.getItem('user_approve_count');
    this.reject_count = localStorage.getItem('user_reject_count');
    this.pending_count = localStorage.getItem('user_pending_count');
    
    this.chart = new Chart("MyChart", {
      type: 'pie',
      // type: 'doughnut',
      data: {
        labels: [
          'Approved Leaves taken',
          'Rejected leave applications',
          'Pending leave applications',         
        ],
        
        datasets: [{
          label: 'No. of Leaves',
          data: [this.approve_count,this.reject_count,this.pending_count],
          backgroundColor: [
            'yellow',
            'red',
            'blue',
          ],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio: 2.2,
        plugins: {
          title: {
            display: true,
            text: 'No. of Leaves',
            font: {
              size: 24,
              weight: 'bold',
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",              
            },
            color: "white",
            padding: {
              top: 10,
              bottom: 30
            }
          },
          legend: {  
            display: true,
            labels: {
              font: {
                size: 20,
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
              },
              color :'white',
            }
          }
        }
      }
    });   
  }

  


}