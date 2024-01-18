import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // modalOpen = false;
  // viewCompletedTask = false;
  // data: Task[] = [];

  // codeInception: Task[] = [];
  // codeReviewDev: Task[] = [];
  // trcReview: Task[] = [];
  // ccr: Task[] = [];
  // codeDeployment: Task[] = [];
  // completedTasks: Task[] = [];

  // openModal() {
  //   this.modalOpen = true;
  // }

  // closeModal() {
  //   this.modalOpen = false;
  // }

  // constructor(
  //   public dialog: MatDialog,
  //   private dataService: DataService,
  //   private utilsService: UtilsService) {}

  // ngOnInit(): void {
  //   this.getAllData();
  // }

  // getAllData () {
  //   this.dataService.getData().subscribe(
  //     (result) => {
  //       this.data = result;
  //       this.filterItemsByStatus(this.data);
  //     },
  //     (error) => {
  //       console.error('Error fetching data:', error);
  //     }
  //   );
  // }

  // moveTask(task: Task) {
  //   const status = this.getNextStatus(task.status);
  //   const currentDate = new Date();
  //   const currentDateTime = currentDate.toLocaleDateString();

  //   const newTask: Task = {
  //     "id": task.id,
  //     "name": task.name,
  //     "assignee": task.assignee,
  //     "description": task.description,
  //     "createdDate": task.createdDate,
  //     "modifiedDate": currentDateTime,
  //     "status": status
  //  }

  //  this.dataService.updateTask(newTask, task.id).subscribe(results => {
  //   alert(results.message);
  //   window.location.reload();
  //  });

  // }

  // getNextStatus(status: string): string {
  //   if(status == 'codeInception') return'codeReviewDev';
  //   if(status == 'codeReviewDev')  return 'trcReview';
  //   if(status == 'trcReview') return 'ccr';
  //   if(status == 'ccr') return 'codeDeployment';
  //   if(status == 'codeDeployment') return 'completed';
  //   return '';
  // }

  // addTask(task: Task) {
  //   this.closeModal();
  // }

  // closedTasks() {
  //   this.viewCompletedTask = true;
  // }

  // filterItemsByStatus(data: Task[]) {
  //   this.codeInception = this.sortProductsDesc(data.filter(item => item.status === 'codeInception'));
  //   this.codeReviewDev = data.filter(item => item.status === 'codeReviewDev');
  //   this.trcReview = data.filter(item => item.status === 'trcReview');
  //   this.ccr = data.filter(item => item.status === 'ccr');
  //   this.codeDeployment = data.filter(item => item.status === 'codeDeployment');
  //   this.completedTasks = data.filter(item => item.status === 'completed');
  // }

  // openDetailsModal(task: any): void {
  //   const dialogConfig: MatDialogConfig = {
  //     width: '400px', 
  //     position: { top: '30vh', left: '40vw' },
  //     data: { task },
  //   };

  //   const dialogRef = this.dialog.open(TaskDetailsModalComponentComponent, dialogConfig);

  //   dialogRef.afterClosed().subscribe(result => {
  //     // window.location.reload();
  //   });
  // }

  // public sortProductsDesc(tasks: Task[]) {
  //   return this.utilsService.sortProductsDesc(tasks);
  // }

}
