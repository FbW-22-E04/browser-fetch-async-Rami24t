import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");
let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal)
    }, (1000 * 60));
});

// promiseOfModal.then(function(val) {
//     console.log("User has been on the page for 60 seconds");
//     val.style.display = "block";
// })
//1.
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


// 3. first way 
// async function promiseBtn() {
//     let promise2 = new Promise(function (resolve) {
//         window.setTimeout(function () {
//             let btn = document.querySelector('#continue');
//             resolve(btn);
//             console.log(btn.getAnimations()[0].finished)
//         }, (300));
//     });
//     let val = await promise2;
//     alert('Continue to subscribe');
//     val.style.backgroundColor = '#eee';
// }

// document.querySelector('#continue').addEventListener('mouseover', (hover) => {
//     promiseBtn();
// })

// 3. 2nd way
async function promiseBtn() {
    let btn = document.querySelector('#continue');
    await btn.getAnimations()[0].finished;
    alert('Continue to subscribe');
    btn.style.backgroundColor = '#eee';
}

document.querySelector('#continue').addEventListener('mouseover', hover => promiseBtn())
