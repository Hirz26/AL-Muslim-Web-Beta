const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        // Close all other answers
        faqs.forEach(otherFaq => {
            const otherAnswer = otherFaq.querySelector('.faq-answer');
            if (otherAnswer !== faq.querySelector('.faq-answer')) {
                otherAnswer.style.display = 'none';
            }
        });

        // Toggle the clicked answer
        const answer = faq.querySelector('.faq-answer');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});