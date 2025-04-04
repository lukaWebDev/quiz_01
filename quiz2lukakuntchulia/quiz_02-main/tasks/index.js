document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-container");
    const submitButton = document.getElementById("submit");
    const submissionsList = document.querySelector(".submissions-list");
  
      
    function loadSubmissions() {
      const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
      submissionsList.innerHTML = "";
  
      if (submissions.length === 0) {
        submissionsList.innerHTML = '<p class="no-data">No submissions yet</p>';
        return;
      }
  
      submissions.forEach(({ name, email, age }) => {
        const submissionItem = document.createElement("div");
        submissionItem.classList.add("submission-item");
        submissionItem.innerHTML = `
          <div class="submission-details">
            <div class="detail-row"><p class="detail-label">Name:</p><p class="detail-value">${name}</p></div>
            <div class="detail-row"><p class="detail-label">Email:</p><p class="detail-value">${email}</p></div>
            <div class="detail-row"><p class="detail-label">Age:</p><p class="detail-value">${age}</p></div>
          </div>
        `;
        submissionsList.appendChild(submissionItem);
      });
    }
  
    submitButton.addEventListener("click", function () {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const age = document.getElementById("age").value.trim();
  
  
      const newSubmission = { name, email, age };
      const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
      submissions.push(newSubmission);
      localStorage.setItem("submissions", JSON.stringify(submissions));
  
      loadSubmissions();
      form.reset();
    });
  
    loadSubmissions();
  });
  