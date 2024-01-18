import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Task } from 'src/app/models/task.model';
import { DataService } from 'src/app/services/data.service';
import { TaskDetailsModalComponentComponent } from '../task-details-modal.component/task-details-modal.component.component';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent implements OnInit{
  data: Task[] = [];
  completedTasks: Task[] = [];

  constructor(
    public dialog: MatDialog,
    private dataService: DataService) {}

    ngOnInit(): void {
      this.getAllData();
    }

    getAllData () {
      this.dataService.getData().subscribe(
        (result) => {
          this.data = result;
          this.filterItemsByStatus(this.data);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }

    filterItemsByStatus(data: Task[]) {
      this.completedTasks = data.filter(item => item.status === 'completed');
    }

    openDetailsModal(task: any): void {
      const dialogConfig: MatDialogConfig = {
        width: '400px', 
        position: { top: '30vh', left: '40vw' },
        data: { task },
      };
  
      const dialogRef = this.dialog.open(TaskDetailsModalComponentComponent, dialogConfig);
  
      dialogRef.afterClosed().subscribe(result => {
        // window.location.reload();
      });
    }

}
