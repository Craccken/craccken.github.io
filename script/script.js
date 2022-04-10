// Fungsi Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical', /* Ini harus dihapus */
  /* Membuat gambar berpindah sendiri selama waktu yang ditentukan delay. */
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true /* Untuk bisa mengeklik lingkaran dibawah gambar */,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // And if we need scrollbar /* Bagian ini dihapus karena kita tidak memerlukan Scroll bar */
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

// fungsi Icons
const icons = document.querySelectorAll(".icons");

// icons.forEach((i) => {
//   i.addEventListener("click", () => {
//     i.classList.toggle("icons-up");
//     setTimeout(() => {
//       if (i.classList.contains("icons-up")) {
//         i.classList.remove("icons-up");
//       }
//     }, 1000);
//   });
// });

function iconActive() {
  icons.forEach((i) => i.classList.remove("icons-up"));
  console.log(this);
  this.classList.add("icons-up");
}

icons.forEach((i) => i.addEventListener("click", iconActive));
