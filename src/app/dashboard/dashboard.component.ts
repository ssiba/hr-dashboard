import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [CommonModule, MatCardModule, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private http:HttpClient){}

  displayedColumns = ['name', 'role', 'status'];

  employees = [
    { name: 'Siba Gouda', role: 'Frontend Dev', status: 'Active' },
    { name: 'Anita Rao', role: 'HR Manager', status: 'Pending' },
    { name: 'Rahul Verma', role: 'Backend Dev', status: 'Active' }
  ];
  ngOnInIt():void{
    this.http.get<any[]>('https://fakestoreapi.com/products').subscribe(res=>{
      console.log('siba',res);
      
    })
      }
}
