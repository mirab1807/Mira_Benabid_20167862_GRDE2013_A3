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
    anchors: ["mySwiper", "nine-nine-two", "nine-one-one", "events"],
    //options here
    autoScrolling: true,
    scrollHorizontally: true
});