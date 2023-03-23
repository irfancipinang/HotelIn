//NAVBAR DROPDOWN
const toggleBtn = document.querySelector('#toggler');
const dropDown = document.querySelector('#navLinks');
const toggleIcon = document.querySelector('#toggler .i');

toggleBtn.onclick = function(){
    dropDown.classList.toggle('open')
};

const btnAlert = document.querySelector('#btnAlert');

btnAlert.onclick = function(){
    alert('Terima kasih kak')
};

//scroll x
const cardContainer = document.querySelector('.sliders');
let isDown = false;
let startX;
let scrollLeft;

cardContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - cardContainer.offsetLeft;
  scrollLeft = cardContainer.scrollLeft;
});

cardContainer.addEventListener('mouseleave', () => {
  isDown = false;
});

cardContainer.addEventListener('mouseup', () => {
  isDown = false;
});

cardContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - cardContainer.offsetLeft;
  const walk = (x - startX) * 3;
  cardContainer.scrollLeft = scrollLeft - walk;
});

//shortcut
const scrollLeftBtn = document.querySelector('#scroll-left-btn');
const scrollRightBtn = document.querySelector('#scroll-right-btn');

scrollLeftBtn.addEventListener('click', () => {
    cardContainer.style.scrollBehavior = "smooth";
    cardContainer.scrollLeft = 0;
    cardContainer.style.scrollBehavior = "unset";
});

scrollRightBtn.addEventListener('click', () => {
    cardContainer.style.scrollBehavior = "smooth";
    cardContainer.scrollLeft = cardContainer.scrollWidth;
    cardContainer.style.scrollBehavior = "unset";
});

