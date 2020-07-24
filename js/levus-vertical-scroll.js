const scroll = document.querySelector('.levus-vertical-scroll ul');

// отримуємо список елементів
let elements = scroll.querySelectorAll('.levus-vertical-scroll li');

console.log(elements.length)

// якщо елементів менше 15, то клонуємо всі
if (elements.length <= 14) {
    elements.forEach(element => {
        const clone = element.cloneNode(true);
        scroll.append(clone);
    });
    elements = scroll.querySelectorAll('.levus-vertical-scroll li');
}

const up = document.querySelector('.levus-vertical-scroll .up');
const down = document.querySelector('.levus-vertical-scroll .down');

// показуємо кнопки
up.style.display = down.style.display = 'block';

// scroll to bottom
up.addEventListener('click', () => {
    const last = scroll.lastElementChild;
    scroll.prepend(last);
    scroll.style.transform = 'translateY(-60px)';
    scroll.style.transition = '';
    setTimeout(() => {
        scroll.style.transform = 'translateY(0)';
        scroll.style.transition = 'all .5s';
    }, 500);
});

// scroll to top
down.addEventListener('click', () => {
    const first = scroll.firstElementChild;
    scroll.append(first);
    scroll.style.transform = 'translateY(60px)';
    scroll.style.transition = '';
    setTimeout(() => {
        scroll.style.transform = 'translateY(0)';
        scroll.style.transition = 'all .5s';
    }, 500);
});