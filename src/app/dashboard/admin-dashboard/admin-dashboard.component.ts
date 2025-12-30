import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

interface ApprovalRequest {
  name: string;
  type:'LEAVE' | 'WFH';
  date: string;
}
@Component({
  selector: 'app-admin-dashboard',
  imports: [
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    CommonModule,
    MatButtonModule,

  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
 /* ---------------- KPI DATA ---------------- */
 kpis = [
  { label: 'Total Employees', value: 245 },
  { label: 'Pending Approvals', value: 12 },
  { label: 'New Joiners', value: 8 },
  { label: 'Active Users', value: 198 }
];


  /* ---------------- APPROVAL QUEUE ---------------- */
  approvalColumns = ['name', 'type', 'date', 'action'];
  approvalQueue:ApprovalRequest[] = [
    { name: 'Siba Gouda', type: 'LEAVE', date: '10 Feb 2025' },
    { name: 'Rahul Sharma', type: 'WFH', date: '11 Feb 2025' },
    { name: 'Alok Kumar', type: 'WFH', date: '12 May 2025' },
    { name: 'Suni Sahu', type: 'LEAVE', date: '20 Jun 2025' },
    { name: 'Sandeep Sharma', type: 'WFH', date: '20 July 2025' }
  ];

  filteredApprovals: ApprovalRequest[] = [...this.approvalQueue];

   /* ---------------- ACTIVITY LOG ---------------- */
   activityLogs = [
    'Admin approved leave for Siba',
    'New employee added: Anjali',
    'Report downloaded by Admin'
  ];

  /* ---------------- FILTER ---------------- */
  selectedFilter: 'ALL' | 'LEAVE' | 'WFH' = 'ALL';

  /* ---------------- WIDGET TOGGLE ---------------- */
  showApprovals = true;
  showActivities = true;

  applyFilter(): void {
    if (this.selectedFilter === 'ALL') {
      this.filteredApprovals = [...this.approvalQueue];
    } else {
      this.filteredApprovals = this.approvalQueue.filter(
        item => item.type === this.selectedFilter
      );
    }
  }
  approve(): void {
    alert('Approved');
  }
  reject(): void {
    alert('Rejected');
  }
}
