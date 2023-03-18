// const ad = document.getElementsByClassName('container-main');
// for (let i = 0; i < ad.length; i++) {
//     ad[i].addEventListener('click', function () {
//         this.classList.toggle('act');
//     })
// };


const ad = document.querySelectorAll(".container-main");
console.log(ad);


ad.forEach((list) => {
    // list.classList.add('.act');
    list.addEventListener("click", () => {
    (list.querySelector(".answer").style.height=='300px') ?
    (list.querySelector(".answer").style.height ='0px') :
    (list.querySelector(".answer").style.height ='300px') ;
    })
})