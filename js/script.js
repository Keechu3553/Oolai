// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mood-based filter
document.addEventListener('DOMContentLoaded', () => {
  const moodSelect = document.getElementById('moodSelect');
  const moodContent = document.getElementById('moodContent');

  if (moodSelect && moodContent) {
    moodSelect.addEventListener('change', () => {
      const mood = moodSelect.value;
      moodContent.textContent = `Displaying content for mood: ${mood}`;
      // Future implementation: Fetch and display content based on selected mood
    });
  }
});

// AI Assistant Interaction
const gptForm = document.getElementById('gptForm');
const gptInput = document.getElementById('gptInput');
const gptOutput = document.getElementById('gptOutput');

if (gptForm) {
  gptForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const query = gptInput.value.trim();
    if (query) {
      gptOutput.textContent = `🤖 Processing your input: "${query}"...`;
      gptInput.value = '';
      // Future implementation: Integrate with AI API to fetch response
    }
  });
}

// Animated section reveals on scroll
const sections = document.querySelectorAll('.section');

const observerOptions = {
  threshold: 0.1
};

const revealSection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(revealSection, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});
