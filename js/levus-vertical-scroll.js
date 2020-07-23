const
    ul = '.levus-vertical-scroll ul',
    li = '.levus-vertical-scroll li',
    toUp = '.levus-vertical-scroll .up',
    toDown = '.levus-vertical-scroll .down';

const scroll = document.querySelector(ul);

// отримуємо список елементів
let elements = scroll.querySelectorAll(li);

// клонуємо
elements.forEach(element => {
    const clone = element.cloneNode(true);
    scroll.append(clone);
});

// отримуємо новий список
elements = scroll.querySelectorAll(li);

// кількість елементів
const length = elements.length - 1;

// 1 елемент
const number = 1;

// тимчасовий масив
const sizes = [];

elements.forEach((element, i) => {
    sizes.push(i * number - number);
});

// висота основного блоку
const height = scroll.offsetHeight;

// кількість елементів
const numerosity = height / 60;

// z-index елемента
let zIndex = 0;

move();

// розміщуємо елементи
function move() {
    elements.forEach((item, i) => {
        item.style.position = 'absolute';
        item.style.top = 0;
        item.style.left = 0;

        item.style.transform = `translateY(${sizes[i] * 60}px)`;

        if (sizes[i] < -1 || sizes[i] > 14) zIndex = 1;
        else zIndex = 3;

        item.style.zIndex = zIndex;
    });
}

const up = document.querySelector(toUp);
const down = document.querySelector(toDown);

// показуємо кнопки
up.style.display = down.style.display = 'block';

up.addEventListener('click', () => {
    const first = sizes.pop();
    sizes.unshift(first);
    move();
});

// scroll to right
down.addEventListener('click', () => {
    const last = sizes.shift();
    sizes.push(last);
    move();
});