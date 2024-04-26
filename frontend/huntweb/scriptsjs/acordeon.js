const acordeon = document.getElementsByClassName('title');

for (i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener('click', function () {
    this.classList.toggle('active');
  })
}


const dog_acordeon = document.getElementsByClassName('mask-dog-title');

for (i = 0; i < dog_acordeon.length; i++) {
  dog_acordeon[i].addEventListener('click', function () {
    this.classList.toggle('active');
  })
}


