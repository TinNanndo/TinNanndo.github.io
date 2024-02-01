// Navbar i swiper

document.addEventListener('DOMContentLoaded', () => {

    //menu

    // const menuButtonClose = document.getElementById('menuButtonClose');
    // const menuButtonOpen = document.getElementById('menuButtonOpen');
    // const menu = document.getElementById('menu');

    // if (!menuButtonClose || !menuButtonOpen || !menu) {
    //     console.error('Required elements not found');
    //     return;
    // }

    // menuButtonClose.addEventListener('click', () => {
    //     menu.classList.add('hidden');
    // });

    // menuButtonOpen.addEventListener('click', () => {
    //     menu.classList.remove('hidden');
    // });

    // swiper

    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 10,
      });
});

// Mail

// async function submitForm() {
//     try {
//         var email = document.getElementById('email').value;

//         if (!email.toString().includes("@")) return;
//         const response = await fetch('https://api.firmus.hr/waitlist', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email: email
//             }),
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         document.getElementById('successMessage').style.display = 'block';
//         document.getElementById('myForm').style.display = 'none';

//         // Handle successful response here if needed
//         console.log('Form submitted successfully');
//     } catch (error) {
//         // Handle errors here
//         console.error('There was a problem with the form submission:', error);
//     }
// }