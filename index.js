const dot = document.querySelector('.dot');
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const week = document.querySelector('.week');

function upDate() {
    showDot = !showDot;
    const now = new Date();

    if (showDot) {
        dot.classList.add('invisible');
    } else {
        dot.classList.remove('invisible');
    }

    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');

    Array.from(week.children).forEach((ele) => {
        ele.classList.remove('active');
    });
    week.children[now.getDay()].classList.add('active');
}

setInterval(upDate, 500);