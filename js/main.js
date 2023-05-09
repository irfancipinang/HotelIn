//NAVBAR DROPDOWN
const toggleBtn = document.querySelector('#toggler');
const dropDown = document.querySelector('#navLinks');
const toggleIcon = document.querySelector('#toggler .i');

toggleBtn.onclick = function(){
    dropDown.classList.toggle('open')
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

function autoScroll() {
  cardContainer.style.scrollBehavior = "smooth";
  cardContainer.scrollLeft = cardContainer.scrollWidth;
  cardContainer.style.scrollBehavior = "unset";

  setTimeout(()=>{
    cardContainer.style.scrollBehavior = "smooth";
    cardContainer.scrollLeft = 0;
    cardContainer.style.scrollBehavior = "unset";
  },2000)

}
setInterval(autoScroll, 4000);


//link whatsApp
function kirimPesan(namaHotel,jumlahKamar, jumlahMenginap, hargaPerMalam) {
  //menghitung total harga
  let totalHarga = jumlahKamar * hargaPerMalam * jumlahMenginap;
  
  let linkPesan = `https://api.whatsapp.com/send?phone=6281319630320&text=${encodeURIComponent(`
  -------- HotelIn Checkout --------

Nama hotel          : ${namaHotel}
Kamar yang dipesan  : ${jumlahKamar} kamar
Waktu menginap      : ${jumlahMenginap} hari
Total harga         : Rp. ${totalHarga},-

-------- HotelIn Checkout --------
  `)}`;
  // return linkPesan;
  window.location.href = linkPesan;
}

//tombol
const btnAlert = document.querySelector('#btnAlert');

// btnAlert.addEventListener("click", function(){ 
//   kirimPesan('ayam goreng',1,3,500000);
//   // console.log('berhasil')
// });

//--------------------- POP UP ------------------//
function showContent() {
  let loading = document.querySelector('#loading');
  loading.style.display = 'none';
}

// Menjalankan fungsi showContent() saat proses loading selesai
window.addEventListener('load', showContent);

//animasi teks
var typing = new Typed(".text", {
  strings: [ "nyaman!", "bersih!", "mudah!",],
  typeSpeed: 120,
  backSpeed: 40,
  loop: true,
});