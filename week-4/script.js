    // 1. Select DOM Elements using ID selectors
    const usernameInput = document.getElementById('username');
    const greetBtn = document.getElementById('greetBtn');
    const toggleBgBtn = document.getElementById('toggleBgBtn');
    const greetingMessage = document.getElementById('greetingMessage');

    // 2. Add dynamic functionality via Event Listeners

    // Event 1: Change text dynamically based on input
    greetBtn.addEventListener('click', () => {
      const name = usernameInput.value.trim();
      
      if (name) {
        greetingMessage.textContent = `Hello, ${name}! Welcome to the page. 🎉`;
        greetingMessage.style.color = '#28a745'; // Change text color dynamically
      } else {
        greetingMessage.textContent = 'Please enter a name first!';
        greetingMessage.style.color = '#dc3545';
      }
    });

    // Event 2: Toggle dark mode on the page background
    toggleBgBtn.addEventListener('click', () => {
      const currentBg = document.body.style.backgroundColor;
      
      if (currentBg === 'rgb(34, 34, 34)' || currentBg === '#222222') {
        document.body.style.backgroundColor = '#f4f4f9';
      } else {
        document.body.style.backgroundColor = '#222222';
      }
    });
