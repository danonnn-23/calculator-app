const navigationButtons = document.querySelectorAll('.nav-btn');

if (navigationButtons) {
    navigationButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`Coming soon: ${button.textContent}`);
        });
    });
}