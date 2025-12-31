export interface Submission {
    id: number;
    type: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    date: string;
  }
  
  export interface Task {
    id: number;
    title: string;
    dueDate: string;
  }
  
  export interface Notification {
    id: number;
    message: string;
    time: string;
  }
  