document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})

function readMore9(){
    let dots9 = document.getElementById("dots9")
    let more9 = document.getElementById("more9")
    
    if(dots9.style.display === "none"){
      dots9.style.display="inline"
      more9.style.display="none"
    } else{
        dots9.style.display="none"
        more9.style.display="inline"
    }
}
function readMore10(){
    let dots10 = document.getElementById("dots10")
    let more10 = document.getElementById("more10")
    
    if(dots10.style.display === "none"){
      dots10.style.display="inline"
      more10.style.display="none"
    } else{
        dots10.style.display="none"
        more10.style.display="inline"
    }
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

