document.addEventListener("DOMContentLoaded", () => {
    const reviewOptionYes = document.getElementById("yesOption");
    const reviewTextArea = document.querySelector(".textarea");
    const feedbackMessage = document.querySelector(".feedback");
    const pattern = /[a-zA-Z]{6,}/

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
      feedbackMessage.style.display = "block";
    });

  });
  