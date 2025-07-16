const faqContainer = document.getElementById('faq-container');
  const resetButton = document.getElementById('reset-button');

document.addEventListener('DOMContentLoaded', function() {

  // Single event listener for the FAQ container 
  faqContainer.addEventListener('click', function(event) {
    // Check if the clicked element is a question
    if (event.target.classList.contains('question')) {
      // Check if Shift key is pressed
      if (event.shiftKey) {
        // Toggle all answers
        const allAnswers = document.querySelectorAll('.answer');
        const anyVisible = Array.from(allAnswers).some(a => a.style.display !== 'none');
        
        allAnswers.forEach(answer => {
          answer.style.display = anyVisible ? 'none' : 'block';
        });
      } else {
        // Toggle just the clicked answer
        const answer = event.target.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
      }
    }
  });
  // Reset button event listener
  resetButton.addEventListener('click', function() {
    document.querySelectorAll('.answer').forEach(answer => {
      answer.style.display = 'none';
    });
  });
});