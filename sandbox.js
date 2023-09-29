document.addEventListener("DOMContentLoaded", () => {
    const reviewOptionYes = document.getElementById("yesOption");
    const reviewTextArea = document.querySelector(".textarea");
    const feedbackMessage = document.querySelector(".feedback");
    const feedbackInput = document.querySelector(".textarea textarea");

    reviewTextArea.style.display = "none";
    feedbackMessage.style.display = "none";
  
    reviewOptionYes.addEventListener("change", () => {
      if (reviewOptionYes.checked) {
        reviewTextArea.style.display = "block";
      } else {
        reviewTextArea.style.display = "none";
      }
    });

    const form = document.querySelector("form");
  
    form.addEventListener("submit", event => {
      event.preventDefault();

      if (reviewOptionYes.checked && feedbackInput.value.trim() === "") {
        setTimeout(() => {
          alert("Please provide feedback in the textarea.");
        }, 300)
        
      } else {
       
        feedbackMessage.style.display = "block";
      }
    });

  });
  