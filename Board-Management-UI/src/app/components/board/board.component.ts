import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  taskName: string = '';
  taskDescription: string = '';
  assignee: string = 'default'; // Assuming 'default' is the initial value
  users: string[] = ["select", "User 1", "User 2", "Kat", "User 4"];

  isModalOpen: boolean = false;
 
  openCreateModal() {
    console.log("hi")
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  replaceSpaces(user: string): string {
    return user.toLowerCase().replace(/\s/g, '');
  }

  createTask() {
    if (!this.taskName || !this.taskDescription || this.assignee === 'default') {
      alert('Please fill in all required fields before submitting');
      return;
    }

    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    console.log("TaskName: ", this.taskName);
    console.log("TaskDescription: : ", this.taskDescription);
    console.log("Assignee: ", this.assignee);

    // Implement the logic to create a card with the entered details and append it to the backlog stage

    // Close the modal
    this.closeModal();

    // Reset the form
    this.taskName = '';
    this.taskDescription = '';
    this.assignee = 'default';
  }
}
