let inputNama = document.querySelector(".checkout-body .nama");
let inputTelepon = document.querySelector(".checkout-body .notelp");

//kode pemesanan
let kode = document.querySelector('.kode');
randomNumber = Math.floor(Math.random() * 8999) + 1000;

kode.innerHTML = randomNumber;

//input nama
let nilaiInputNama;
inputNama.addEventListener("input", () => {
  nilaiInputNama = inputNama.value;
  console.log(nilaiInputNama);
});
let nilaiInputTelepon;
inputTelepon.addEventListener("input", () => {
  nilaiInputTelepon = inputTelepon.value;
});

//fungsi tombol kamar
let kurangValueKamar = document.getElementById("kurangValueKamar");
let tambahValueKamar = document.getElementById("tambahValueKamar");
let valueKamar = document.querySelector(".angka-kamar");
newValueKamar = 0;

kurangValueKamar.addEventListener("click", () => {
  newValueKamar--;
  valueKamar.innerHTML = newValueKamar;

  menghitung();
});
tambahValueKamar.addEventListener("click", () => {
  newValueKamar++;
  valueKamar.innerHTML = newValueKamar;

  menghitung();
});

//fungsi tombol waktu menginap
let kurangValueWaktu = document.getElementById("kurangValueWaktu");
let tambahValueWaktu = document.getElementById("tambahValueWaktu");
let valueWaktu = document.querySelector(".angka-waktu");
newValueWaktu = 0;

kurangValueWaktu.addEventListener("click", () => {
  newValueWaktu--;
  valueWaktu.innerHTML = newValueWaktu;

  menghitung();
});
tambahValueWaktu.addEventListener("click", () => {
  newValueWaktu++;
  valueWaktu.innerHTML = newValueWaktu;

  menghitung();
});

function formatAngka(number) {
  return number.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });
}

let totalPembayaran;
function menghitung(permalam) {
  //menghitung
  let hargaPerMalam = 490000 * newValueWaktu,
    hargaKamar = newValueKamar,
    pajak = hargaPerMalam * hargaKamar * 0.1,
    diskon = 0;
  totalPembayaran = hargaPerMalam + pajak - diskon;

  //memanipulasi
  let innerPajak = document.querySelector(".pajak"),
    innerTotalPembayaran = document.querySelector(".total");

    innerPajak.innerHTML = `${formatAngka(pajak)}`;
    innerTotalPembayaran.innerHTML = `${formatAngka(totalPembayaran)},-`;
  return totalPembayaran;
}

//link whatsApp
function kirimPesan(namaHotel, jumlahKamar, jumlahMenginap, hargaPerMalam) {
  //menghitung total harga
  let totalHarga = jumlahKamar * hargaPerMalam * jumlahMenginap;

  let linkPesan = `https://api.whatsapp.com/send?phone=6281319630320&text=${encodeURIComponent(`
    -------- HotelIn Checkout --------
  
kode pemesanan: ${randomNumber}
    
Nama : ${nilaiInputNama}
No. Telepon / Email : ${nilaiInputTelepon}
Nama hotel          : Brits Hotel Legian
Kamar yang dipesan  : ${newValueKamar} kamar
Waktu menginap      : ${newValueWaktu} hari
Total harga         : ${formatAngka(totalPembayaran)},-
  
-------- HotelIn Checkout --------
    `)}`;
  // return linkPesan;
  window.location.href = linkPesan;
}
//tombol konfirmasi
const konfirmasi = document.querySelectorAll(".konfirmasi");
konfirmasi.forEach(function (element) {
  element.addEventListener("click", function () {
    if (nilaiInputNama != undefined || nilaiInputTelepon != undefined) {
      if (newValueKamar >= 1 && newValueWaktu >= 1) {
        kirimPesan("ayam goreng", 1, 3, 500000);
      } else {
        alert("harap masukkan input dengan benar");
      }
    } else {
      alert("harap masukkan nama atau no telepon anda");
    }
  });
});

//nhhpih
var pesan = document.getElementById('pesanSekarang')
var popUp = document.getElementById('popup')
var closeBtn = document.getElementById('exit')

pesan.addEventListener('click',()=>{
  popUp.style.display = 'block';
})
closeBtn.addEventListener('click',()=>{
  popUp.style.display = 'none';
})
