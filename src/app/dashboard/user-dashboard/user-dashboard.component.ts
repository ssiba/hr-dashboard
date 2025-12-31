import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Submission, Task,Notification } from '../../models/user-dashboard.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-dashboard',
  imports: [MatCardModule,MatButtonModule,CommonModule,MatIconModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {
  recentSubmissions: Submission[] = [];
  pendingTasks: Task[] = [];
  notifications: Notification[] = [];

  ngOnInit(): void {
    this.loadSubmissions();
    this.loadTasks();
    this.loadNotifications();
  }

  private loadSubmissions(): void {
    this.recentSubmissions = [
      { id: 1, type: 'Leave Request', status: 'PENDING', date: '12 Feb 2025' },
      { id: 2, type: 'WFH Request', status: 'APPROVED', date: '10 Feb 2025' }
    ];
  }

  private loadTasks(): void {
    this.pendingTasks = [
      { id: 1, title: 'Submit Timesheet', dueDate: '15 Feb 2025' },
      { id: 2, title: 'Update Profile', dueDate: '18 Feb 2025' }
    ];
  }

  private loadNotifications(): void {
    this.notifications = [
      { id: 1, message: 'Leave request approved', time: '2 hours ago' },
      { id: 2, message: 'New HR policy uploaded', time: '1 day ago' }
    ];
  }

  quickAction(action: string): void {
    console.log(`Quick action clicked: ${action}`);
  }


}
