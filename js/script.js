document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetID = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Adjust for fixed header if any
          behavior: "smooth",
        });
      }
    });
  });

  // Mood Filter Buttons
  const moodButtons = document.querySelectorAll(".mood-btn");
  const cards = document.querySelectorAll(".card");

  moodButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Toggle active class
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        showAllCards();
      } else {
        clearActiveMoodButtons();
        button.classList.add("active");
        filterCardsByMood(button.dataset.mood);
      }
    });
  });

  function clearActiveMoodButtons() {
    moodButtons.forEach(btn => btn.classList.remove("active"));
  }

  function showAllCards() {
    cards.forEach(card => {
      card.style.display = "block";
    });
  }

  function filterCardsByMood(mood) {
    cards.forEach(card => {
      if (card.dataset.mood === mood) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // On page load, show all cards by default
  showAllCards();

  // AI Assistant Simulation
  const aiForm = document.getElementById("ai-assistant-form");
  const aiInput = document.getElementById("ai-input");
  const aiResponseBox = document.getElementById("ai-response");

  if (aiForm) {
    aiForm.addEventListener("submit", e => {
      e.preventDefault();
      const userInput = aiInput.value.trim();
      if (userInput === "") {
        aiResponseBox.textContent = "Please type something to get assistance.";
        return;
      }
      aiResponseBox.textContent = "Thinking...";
      // Simulate AI response with delay
      setTimeout(() => {
        aiResponseBox.textContent = generateAiReply(userInput);
      }, 1500);
      aiInput.value = "";
    });
  }

  function generateAiReply(input) {
    // Placeholder simple logic for AI response simulation
    const keywords = ["poem", "sad", "happy", "love", "friend", "life", "hope"];
    let response = "I’m here to help with your emotions and writing.";

    keywords.forEach(keyword => {
      if (input.toLowerCase().includes(keyword)) {
        switch (keyword) {
          case "poem":
            response = "Try expressing your feelings with simple, heartfelt lines.";
            break;
          case "sad":
            response = "Remember, after rain comes sunshine. Stay strong.";
            break;
          case "happy":
            response = "Your happiness is a beautiful light—keep shining!";
            break;
          case "love":
            response = "Love is the heart's true language. Let it flow naturally.";
            break;
          case "friend":
            response = "Friends are the family we choose; cherish them always.";
            break;
          case "life":
            response = "Life’s ups and downs make the journey meaningful.";
            break;
          case "hope":
            response = "Hope is the anchor that keeps the soul steady.";
            break;
        }
      }
    });

    return response;
  }

  // Hash change event to scroll or show sections if needed
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.substring(1);
    const section = document.getElementById(hash);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });

});
