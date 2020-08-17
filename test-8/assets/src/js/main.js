let left = document.querySelector('.left');
let right = document.querySelector('.right');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    left.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
    right.style.transform = 'translate(+' + x * 70 + 'px, +' + y * 70 + 'px)';
});


$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        769:{
            items:3,
            margin: 10
        }
    },

    
})

$('.my-next-button').click(function() {
    $('.owl-next').trigger('next.owl.carousel');
  });
  
  $('.my-prev-button').click(function() {
    $('.owl-prev').trigger('prev.owl.carousel');
  });