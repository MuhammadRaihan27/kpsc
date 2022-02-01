var swiper3 = new Swiper(".carousel-header", {
  grabCursor: true,
  effect: "creative",
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  pagination: {
    el: ".swiper-pagination",
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
