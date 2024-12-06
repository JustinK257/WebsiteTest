document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (event) => {
      console.log(`Navigating to: ${event.target.href}`);
  });
});

