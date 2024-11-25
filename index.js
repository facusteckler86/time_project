const $ = (selector) =>{
    return document.querySelector(selector);
}

const hour = $ ('hour');
const dot = $ ('dot');
const min = $ ('min');
const  week = $ ('week');

let showDot = true;

function upDate(){
    showDot = !showDot;
    const now = new Date();

    if(showDot){
        dot.classList.add('invisible');
    } else{
        dot.classList.remove('invisible');
    }

    hour.textContent = String(now.getHours())
    .padStart(2,'0');
    min.textContent = String(now.getMinutes())
    .padStart(2,'0');

    Array
    .from(week.children)
    .forEach(
        (ele)=>{
            ele.classList.remove('activate');
        }
    );
    week
    .children[now.getDay()]
    .classList
    .add('activate');
}

setInterval(upDate, 500);