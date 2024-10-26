const rulesContainer = document.querySelector('.rules-bg')

document.querySelector('.close-icon').addEventListener('click', () => rulesContainer.style.display = 'none')

document.querySelector('.rules-btn').addEventListener('click', () => rulesContainer.style.display = 'flex')