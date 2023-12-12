document.addEventListener("DOMContentLoaded", function () {
  var backlogStage = document.getElementById('backlog');
  var taskForm = document.getElementById('taskForm');

  // List of users
  var users = ["     ","User 1", "User 2", "Kat", "User 4"];

  function openCreateModal() {
    document.getElementById('myModal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  function createTask() {
    var taskName = document.getElementById('taskName').value;
    var taskDescription = document.getElementById('taskDescription').value;
    var assignee = document.getElementById('assignee').value;

    if(!taskName || !taskDescription || assignee ==='default')
    {
      alert('Please fill in all required fields before submitting')
      return;
    }

    // Get the current date and time
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString();
    var formattedTime = currentDate.toLocaleTimeString();

    console.log("TaskName: ", taskName);
    console.log("TaskDescription: : ", taskDescription);
    console.log("Assignee: ", assignee);

    // Create a card with the entered details
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<strong>${taskName}</strong><br>${taskDescription}<br>Assignee: ${assignee} <br> Date: ${formattedDate} <br> Time: ${formattedTime}`;
   
    // Append the card to the backlog stage
    backlogStage.appendChild(card);

    // Close the modal
    closeModal();

    // Reset the form
    taskForm.reset();
  }

  function populateAssigneeDropdown() {
    var assigneeDropdown = document.getElementById('assignee');

    // Clear existing options
    assigneeDropdown.innerHTML = "";

    // Add options for each user
    users.forEach(function (user) {
      var option = document.createElement('option');
      option.value = user.toLowerCase().replace(/\s/g, ''); // Convert to lowercase and remove spaces for simplicity
      option.text = user;
      assigneeDropdown.appendChild(option);
    });
  }

  // Call the function to populate the dropdown initially
  populateAssigneeDropdown();

  var createButton = document.querySelector('.btn-create'); // Corrected selector
  if (createButton) {
    createButton.addEventListener('click', openCreateModal);
  }

  var submitButton = document.querySelector('#taskForm button');
  if (submitButton) {
    submitButton.addEventListener('click', createTask);
  }
  
  var closeModalButton = document.querySelector('#myModal span');
  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
  }
});