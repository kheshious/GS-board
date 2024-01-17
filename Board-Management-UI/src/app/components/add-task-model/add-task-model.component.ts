import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-task-model',
  templateUrl: './add-task-model.component.html',
  styleUrls: ['./add-task-model.component.scss']
})
export class AddTaskModelComponent {
  @Output() taskSubmitted = new EventEmitter<any>();
  @Output() modalClosed = new EventEmitter<void>();

  taskName: string = '';
  description: string = '';
  selectedAssignee: string = '';
  assignees: string[] = ['John', 'Kat', 'Tlou'];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  submitForm() {
    const currentDate = new Date();

    // Format the date using the DatePipe
    // const currentDateTime = this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss');
    const currentDateTime = currentDate.toLocaleDateString();

    const task = {
      name: this.taskName,
      description: this.description,
      assignee: this.selectedAssignee,
      createdDate: new Date(),
      modifiedDate: new Date(),
      status: 'codeInception'
    };
    this.dataService.saveItem(task).subscribe((results: Task) => {
      alert(`Task successfully created with the id of ${results.id}`);
      window.location.reload();
    });
    // this.taskSubmitted.emit(task);
  }

  closeModal() {
    this.modalClosed.emit();
  }

}
