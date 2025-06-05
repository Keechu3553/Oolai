// Simple AI assistant mock function
document.getElementById('ai-submit').addEventListener('click', () => {
  const input = document.getElementById('ai-input').value.trim();
  const responseDiv = document.getElementById('ai-response');

  if (!input) {
    responseDiv.textContent = "Please ask something!";
    return;
  }

  responseDiv.textContent = "Thinking...";

  // Mock AI response delay
  setTimeout(() => {
    // Simple canned response - replace with real AI integration as needed
    responseDiv.textContent = `You asked: "${input}". Here's a thoughtful suggestion to inspire your writing!`;
  }, 1500);
});
