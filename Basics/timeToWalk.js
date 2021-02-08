function timeCalculator (steps, footPrint, speed) {
    const distance = steps * footPrint;
    let time = Math.round(distance / speed * 3.6);
    time += Math.floor(distance / 500) * 60;

    const seconds = time % 60;
    time -= seconds;
    const minutes = (time / 60) % 60;
    time-= minutes*60;
    const hours =time/3600;

    console.log(hours+':'+minutes+':'+seconds);
}
timeCalculator(4000, 0.60, 5);

timeCalculator(2564, 0.70, 5.5);