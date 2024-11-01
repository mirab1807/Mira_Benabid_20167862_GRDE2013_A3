const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //scrolling 
  new fullpage('#fullpage', {
    menu: "#nav",
    anchors: ["mySwiper", "seven-one-eight", "nine-one-one", "events"],
    //options here
    autoScrolling: true,
    scrollHorizontally: true
});


// animte heading text 
const animationElements = document.querySelectorAll (".animate-on-scroll")
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    } else {
      //entry.target.classList.remove("animate");
    }
  })
  {
    threshold: 0.5
  }
});

for (let i = 0; i < animationElements.length; i++) {
  const el = animationElements[i];

  observer.observe(el);
}