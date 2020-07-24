class LevusVerticalScroll {
    constructor(id) {
        this.id = document.querySelector(id);
        this.scroll = this.id.querySelector('ul');
        this.elements = this.id.querySelectorAll('li');
        this.up = this.id.querySelector('.up');
        this.down = this.id.querySelector('.down');
    }

    clone() {
        if (this.elements.length <= 14) {

            this.elements.forEach(element => {
                const clone = element.cloneNode(true);
                this.scroll.append(clone);
            });
            this.elements = this.scroll.querySelectorAll('.levus-vertical-scroll li');
        }
    }

    buttons() {
        this.up.style.display = this.down.style.display = 'block';
    }

    arrow() {
        this.up.addEventListener('click', () => {
            const last = this.scroll.lastElementChild;
            this.scroll.prepend(last);
            this.scroll.style.transform = 'translateY(-60px)';
            this.scroll.style.transition = '';
            setTimeout(() => {
                this.scroll.style.transform = 'translateY(0)';
                this.scroll.style.transition = 'all .5s';
            }, 300);
        });

        this.down.addEventListener('click', () => {
            const first = this.scroll.firstElementChild;
            this.scroll.append(first);
            this.scroll.style.transform = 'translateY(60px)';
            this.scroll.style.transition = '';
            setTimeout(() => {
                this.scroll.style.transform = 'translateY(0)';
                this.scroll.style.transition = 'all .5s';
            }, 300);
        });
    }

    init() {
        this.clone();
        this.buttons();
        this.arrow();
    }

}

document.querySelector('#scroll') && new LevusVerticalScroll('#scroll').init();