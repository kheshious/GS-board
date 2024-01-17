import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-task-details-modal.component',
  templateUrl: './task-details-modal.component.component.html',
  styleUrls: ['./task-details-modal.component.component.scss'],
})
export class TaskDetailsModalComponentComponent {
  currentDate: Date = new Date();

  constructor(
    public dialogRef: MatDialogRef<TaskDetailsModalComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
