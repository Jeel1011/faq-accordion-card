const toggleButtons = document.querySelectorAll('.faq-card__toggle-button');
const answers = document.querySelectorAll('.faq-card__answer');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.parentElement.nextElementSibling;
        const isOpen = answer.classList.contains('show');

        // Close all open answers
        answers.forEach(ans => {
            ans.classList.remove('show');
        });

        // Rotate arrow icons
        toggleButtons.forEach(btn => {
            btn.classList.remove('rotate-icon');
        });

        // Remove border from questions
        const questionParts = document.querySelectorAll('.faq-card__item');
        questionParts.forEach(part => {
            part.classList.remove('no-border');
        });

        // Remove active styling from all questions
        const questionTexts = document.querySelectorAll('.faq-card__item .faq-card__question .faq-card__question-text');
        questionTexts.forEach(questionText => {
            questionText.classList.remove('active-question');
        });

        if (!isOpen) {
            this.classList.add('rotate-icon'); // Rotate arrow icon
            answer.classList.add('show'); // Show answer

            // Add border to the question when the answer is visible
            this.parentElement.parentElement.classList.add('no-border');

            // Add active styling to the clicked question
            this.parentElement.querySelector('.faq-card__question .faq-card__question-text').classList.add('active-question');
        }
    });
});
