const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

const cursor = document.querySelector('.cursor');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => cursor.classList.add('big'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('big'));
    });
}
