import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");
let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal)
    }, (1000 * 60));
});
async function promiseFunc() {
    let val = await promiseOfModal;
    console.log("User has been on the page for 60 seconds");
    val.style.display = "block";
}
promiseFunc();
modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})

let btn = document.querySelector('#continue');
async function promiseBtn() {
    await btn.getAnimations()[0].finished;
    btn.style.backgroundColor = colorGenerator();
    alert('Continue to subscribe');
}
btn.addEventListener('mouseover', hover => promiseBtn());
function colorGenerator() {
    let r = Math.floor(Math.random() * 256).toFixed(0);
    let g = Math.floor(Math.random() * 256).toFixed(0);
    let b = Math.floor(Math.random() * 256).toFixed(0);
    let a = Math.random().toFixed(3);
    return `rgba(${r},${g},${b},${a})`;
}