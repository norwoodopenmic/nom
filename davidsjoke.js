// Wait for the DOM content to load fully
document.addEventListener('DOMContentLoaded', () => {
    // 1. Log to the browser's developer console
    console.log("I am muffin without you! Badum tis!");

    // 2. Add an interactive click listener to the button
    const button = document.getElementById('demoBtn');
    const output = document.getElementById('output');

    button.addEventListener('click', () => {
        output.textContent = "I am muffin without you! Badum tis! 🥁🧁🥰 ";

    });
});
