const ad = document.getElementsByClassName('container-main');
for (let i = 0; i < ad.length; i++) {
    ad[i].addEventListener('click', function () {
        this.classList.toggle('act');
    })
};
