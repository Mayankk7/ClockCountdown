let clockH = document.querySelector('clock__hours');
let clockM = document.querySelector('clock__minutes');
let clockS = document.querySelector('clock__seconds');

let updateTime = () => {
    let now = new Date();
    let hours = now.getHours() % 12;
    let minutes = now.getSeconds();
    let seconds = now.getSeconds();

}