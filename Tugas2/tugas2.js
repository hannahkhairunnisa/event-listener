const hover = document.getElementById('hover');
const pesan = document.getElementById('pesan');

hover.addEventListener('mouseover', function () {
    pesan.textContent = 'Mouse is over the button!';
});

hover.addEventListener('mouseout', function () {
    pesan.textContent = 'Hover over this button!';
});