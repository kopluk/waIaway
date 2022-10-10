const afterTime = Date.parse('10 Oct 2043, 23:30:00');
console.log(afterTime)

const calcTime = () => {
    let now = Date.now();
    let calcedTime = afterTime - now;

    let years = Math.floor(calcedTime / 1000 / 60 / 60 / 24 / 365)
    let months = Math.floor(calcedTime / 1000 / 60 / 60 / 24 / 30.416) % 12;
    // дни считаются не правильно вроде как
    let days = Math.floor(calcedTime / 1000 / 60 / 60 / 24);
    let hours = Math.floor(calcedTime / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(calcedTime / 1000 / 60) % 60;
    let seconds = Math.floor(calcedTime / 1000) % 60;

    // название блоков со значением

    const yearsBlock = document.querySelector('.y');
    const monthsBlock = document.querySelector('.mont');
    const daysBlock = document.querySelector('.d');
    const hoursBlock = document.querySelector('.h');
    const minutesBlock = document.querySelector('.m');
    const secondsBlock = document.querySelector('.s');

    // условие присвоения значений

    if (years > 0) {
        yearsBlock.textContent = years;
    } else {
        yearsBlock.closest('.cell__body').style.display = 'none';
        document.querySelector('.cell__after_y').style.display = 'block';
    }

    if (years > 0 || months > 0) {
        monthsBlock.textContent = months;
    } else {
        monthsBlock.closest('.cell__body').style.display = 'none';
        document.querySelector('.cell__after_mont').style.display = 'block';
    }

    if (years > 0 || months > 0 || days > 0) {
        daysBlock.textContent = days;
    } else {
        daysBlock.closest('.cell__body').style.display = 'none';
        document.querySelector('.cell__after_d').style.display = 'block';
    }

    if (years > 0 || months > 0 || days > 0 || hours > 0) {
        hoursBlock.textContent = hours;
    } else {
        hoursBlock.closest('.cell__body').style.display = 'none';
        document.querySelector('.cell__after_h').style.display = 'block';
    }

    if (years > 0 || months > 0 || days > 0 || hours > 0 || minutes > 0) {
        minutesBlock.textContent = minutes;
    } else {
        minutesBlock.closest('.cell__body').style.display = 'none';
        document.querySelector('.cell__after_m').style.display = 'block';
    }

    if (years > 0 || months > 0 || days > 0 || hours > 0 || minutes > 0 || seconds > 0) {
        secondsBlock.textContent = seconds;
    } else {
        secondsBlock.closest('.cell__body').style.display = 'none';
        document.querySelector('.cell__after_s').style.display = 'block';
    }

    // присвоение значение
    monthsBlock.textContent = months;
    daysBlock.textContent = days;
    hoursBlock.textContent = hours;
    minutesBlock.textContent = minutes;
    secondsBlock.textContent = seconds;
}

// calcTime();

setInterval(calcTime, 1000);