document.addEventListener('DOMContentLoaded', () => {
  // Mood filter functionality
  const moodButtons = document.querySelectorAll('.mood-btn');
  const cards = document.querySelectorAll('.card');

  moodButtons.forEach(button => {
    button.addEventListener('click', () => {
      const mood = button.getAttribute('data-mood');

      // Remove active class from all buttons
      moodButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      if (mood === 'all') {
        // Show all cards
        cards.forEach(card => (card.style.display = 'flex'));
      } else {
        cards.forEach(card => {
          const cardMoods = card.getAttribute('data-moods').split(' ');
          if (cardMoods.includes(mood)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      }
    });
  });

  // AI Assistant functionality (simple echo)
  const aiInput = document.getElementById('ai-input');
  const aiSubmit = document.getElementById('ai-submit');
  const aiOutput = document.querySelector('.ai-output');

  aiSubmit.addEventListener('click', () => {
    const question = aiInput.value.trim();
    if (!question) {
      aiOutput.textContent = 'Please type something to ask the AI assistant.';
      return;
    }

    aiOutput.textContent = 'Thinking... 🤔';

    // Simulate AI response after delay
    setTimeout(() => {
      aiOutput.textContent = `You asked: "${question}"\n\n(Here would come the AI-generated response.)`;
    }, 1000);
  });
});
