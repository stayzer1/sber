// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

const mm = gsap.matchMedia();
mm.add("(max-width: 1024px)", () => {
  const tl = gsap.timeline();

  tl.set([".promo__wrapper-text2", ".promo__wrapper-text3"], {
    y: "100vh",
    opacity: 0,
  }),
    tl.set([".promo__wrapper-img2", ".promo__wrapper-img3"], { opacity: 0 }),
    tl.set(
      [
        ".promo__wrapper-phone-item2 .promo__wrapper-phone-item-card",
        ".promo__wrapper-phone-item3 .promo__wrapper-phone-item-card",
      ],
      { x: "110%", opacity: 0 }
    );
  ScrollTrigger.create({
    animation: tl,
    trigger: ".promo",
    start: "top+=15px top",
    end: "+=5000",
    scrub: 2,
    pin: true,
  });
  tl.to(".promo__wrapper-text2", { y: 0, opacity: 1, duration: 2, delay: 1 }),
    tl.to(".promo__wrapper-img1", { display: "none", opacity: 0 }, "<"),
    tl.to(".promo__wrapper-img2", { opacity: 1 }, "<"),
    tl.to(
      ".promo__wrapper-phone-item1 .promo__wrapper-phone-item-card",
      { opacity: 0 },
      "<"
    ),
    tl.to(
      ".promo__wrapper-phone-item2 .promo__wrapper-phone-item-card",
      { x: 0, stagger: 0.7, delay: 0.2, opacity: 1 },
      "<"
    ),
    tl.to(".promo__wrapper-text3", { y: 0, duration: 2, opacity: 1 }),
    tl.to(".promo__wrapper-img2", { display: "none", opacity: 0 }, "<"),
    tl.to(".promo__wrapper-img3", { opacity: 1 }, "<"),
    tl.to(
      ".promo__wrapper-phone-item2 .promo__wrapper-phone-item-card",
      { opacity: 0 },
      "<"
    ),
    tl.to(
      ".promo__wrapper-phone-item3 .promo__wrapper-phone-item-card",
      { x: 0, stagger: 0.7, delay: 0.2, opacity: 1 },
      "<"
    ),
    tl.to(".promo__wrapper-phone-item3 .promo__wrapper-phone-item-card", {
      delay: 1,
    });
}),
  mm.add("(min-width: 1023px)", () => {
    const tl = gsap.timeline();

    // tl.fromTo(['.promo__wrapper-text2', '.promo__wrapper-text3'], {y: 50, opacity: 0}, )
    tl.set([".promo__wrapper-text2", ".promo__wrapper-text3"], {
      y: 50,
      opacity: 0,
    }),
      tl.set(
        [
          ".promo__wrapper-phone-item2 .promo__wrapper-phone-item-card",
          ".promo__wrapper-phone-item3 .promo__wrapper-phone-item-card",
        ],
        {
          x: "110%",
          opacity: 0,
        }
      ),
      tl.set([".promo__wrapper-img2", ".promo__wrapper-img3"], { opacity: 0 });
    ScrollTrigger.create({
      animation: tl,
      trigger: ".promo",
      start: "top+=70px top",
      end: "+=5000",
      scrub: 2,
      pin: true,
    });
    tl.to(".promo__wrapper-text1", { opacity: 0, y: -50, delay: 2 }),
      tl.to(".promo__wrapper-text2", { opacity: 1, y: 0 }),
      tl.to(".promo__wrapper-img1", { opacity: 0 }, "<"),
      tl.to(".promo__wrapper-img2", { opacity: 1 }, "<"),
      tl.to(
        ".promo__wrapper-phone-item1 .promo__wrapper-phone-item-card",
        { opacity: 0 },
        "<"
      ),
      tl.to(
        ".promo__wrapper-phone-item2 .promo__wrapper-phone-item-card",
        { x: 0, stagger: 0.7, opacity: 1 },
        "<"
      ),
      tl.to(".promo__wrapper-text2", { opacity: 0, y: -50 }),
      tl.to(".promo__wrapper-text3", { opacity: 1, y: 0 }),
      tl.to(".promo__wrapper-img2", { opacity: 0 }, "<"),
      tl.to(".promo__wrapper-img3", { opacity: 1 }, "<"),
      tl.to(
        ".promo__wrapper-phone-item2 .promo__wrapper-phone-item-card",
        { opacity: 0 },
        "<"
      ),
      tl.to(
        ".promo__wrapper-phone-item3 .promo__wrapper-phone-item-card",
        { x: 0, stagger: 0.7, opacity: 1 },
        "<"
      ),
      tl.to(".promo__wrapper-text3", { delay: 2 }, "<");
  });

const mm2 = gsap.matchMedia();
mm2.add("(max-width: 1024px", () => {
  const tl2 = gsap.timeline();
  tl2.set([".benefits__image-2", ".benefits__image-3", ".benefits__image-4"], {
    opacity: 0,
  }),
    tl2.set([".benefits__text2", ".benefits__text3", ".benefits__text4"], {
      opacity: 0,
      y: "100vh",
    });
  ScrollTrigger.create({
    animation: tl2,
    trigger: ".benefits",
    start: "top+=7% top",
    end: "+=5000",
    scrub: 2,
    pin: !0,
  });
  tl2.to([".benefits__text1", ".benefits__image-1"], { opacity: 0, y: 0 }),
    tl2.to(
      [".benefits__text2", ".benefits__image-2"],
      { opacity: 1, y: 0 },
      "<"
    ),
    tl2.to([".benefits__text2", ".benefits__image-2"], { opacity: 0, y: 0 }),
    tl2.to(
      [".benefits__text3", ".benefits__image-3"],
      { opacity: 1, y: 0 },
      "<"
    ),
    tl2.to([".benefits__text3", ".benefits__image-3"], { opacity: 0, y: 0 }),
    tl2.to(
      [".benefits__text4", ".benefits__image-4"],
      { opacity: 1, y: 0 },
      "<"
    );
}),
  mm2.add("(min-width: 1023px)", () => {
    const tl2 = gsap.timeline();
    tl2.set(
      [".benefits__image-2", ".benefits__image-3", ".benefits__image-4"],
      {
        opacity: 0,
      }
    ),
      tl2.set([".benefits__text2", ".benefits__text3", ".benefits__text4"], {
        opacity: 0,
        y: 100,
      });
    ScrollTrigger.create({
      animation: tl2,
      trigger: ".benefits",
      start: "top+=8% top",
      end: "+=5000",
      scrub: 2,
      pin: !0,
    });
    tl2.to([".benefits__text1", ".benefits__image-1"], { opacity: 0, y: 0 }),
      tl2.to(
        [".benefits__text2", ".benefits__image-2"],
        { opacity: 1, y: 0 },
        "<"
      ),
      tl2.to([".benefits__text2", ".benefits__image-2"], { opacity: 0, y: 0 }),
      tl2.to(
        [".benefits__text3", ".benefits__image-3"],
        { opacity: 1, y: 0 },
        "<"
      ),
      tl2.to([".benefits__text3", ".benefits__image-3"], { opacity: 0, y: 0 }),
      tl2.to(
        [".benefits__text4", ".benefits__image-4"],
        { opacity: 1, y: 0 },
        "<"
      );
  });

// document.addEventListener("DOMContentLoaded", function () {
//   const selectCards = document.querySelectorAll(".select__card-content");

//   selectCards.forEach((card) => {
//     card.addEventListener("click", function () {
//       selectCards.forEach((card) =>
//         card.classList.remove("select__card-content_active")
//       );
//       this.classList.add("select__card-content_active");
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const selectCards = document.querySelectorAll(".select__card");

//   selectCards.forEach((card) => {
//     card.addEventListener("click", function () {
//       this.classList.toggle("select__card_active"); // Toggle _active class on the clicked card
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const selectCards = document.querySelectorAll(".select__card");
  const selectBtn = document.querySelector(".select-btn");
  selectCards.forEach((card) => {
    card.addEventListener("click", function () {
      this.classList.toggle("select__card_active");
      const isActiveCard = Array.from(selectCards).some(card => card.classList.contains("select__card_active"));
      selectBtn.style.display = isActiveCard ? "block" : "none";
    });
  });
});


// Аккордеон
function accordion() {
  const items = document.querySelectorAll(".accordion__item-trigger");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentNode;
      if (parent.classList.contains("accordion__item-active")) {
        parent.classList.remove("accordion__item-active");
      } else {
        document
          .querySelectorAll(".accordion__item")
          .forEach((child) => child.classList.remove("accordion__item-active"));
        parent.classList.add("accordion__item-active");
      }
    });
  });
}
accordion();
function accordion2() {
  const items = document.querySelectorAll(".accordion__item-trigger2");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentNode;
      if (parent.classList.contains("accordion__item2-active")) {
        parent.classList.remove("accordion__item2-active");
      } else {
        document
          .querySelectorAll(".accordion__item")
          .forEach((child) =>
            child.classList.remove("accordion__item2-active")
          );
        parent.classList.add("accordion__item2-active");
      }
    });
  });
}
accordion2();

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
