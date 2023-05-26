function showSuccessMessage(event) {
    event.preventDefault(); 
  
    var successMessage = document.createElement("div");
    successMessage.classList.add("success-message");
    successMessage.textContent = "Message received";
  
    var successMessageContainer = document.getElementById("success_message");
    successMessageContainer.appendChild(successMessage);
  
    setTimeout(function() {
      successMessage.remove();
      document.getElementById("name").value = ""; 
      document.getElementById("email").value = ""; 
      document.getElementById("message").value = ""; 
    }, 3000);
  }
