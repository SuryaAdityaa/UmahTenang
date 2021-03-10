// Testimonials
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// Header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$('.menu-link').click(function() {
    $('html, body').animate({
        scrollTop: eval($('#' + $(this).attr('target')).offset().top - 70)
    }, 1000);
});

// Gallery
function openGallery(category) {
    var i;
    var x = document.getElementsByClassName("gallery-slide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(category).style.display = "block";
}

$('.tab-button').on("click", function() {
  $('.active').not(this).removeClass('active');
  $(this).toggleClass('active');
})