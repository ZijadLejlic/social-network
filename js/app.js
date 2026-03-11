document.querySelector('#registracija').addEventListener('click', () => {
    document.querySelector('.custom-modal').style.display = 'block';
});

document.querySelector('#close-modal').addEventListener('click', () => {
    document.querySelector('.custom-modal').style.display = 'none';
});