export default function initTemplateScripts() {
  "use strict";

  function toggleScrolled() {
    const body = document.body;
    const header = document.querySelector("#header");

    if (!header) return;
    if (
      !header.classList.contains("scroll-up-sticky") &&
      !header.classList.contains("sticky-top") &&
      !header.classList.contains("fixed-top")
    )
      return;

    if (window.scrollY > 100) {
      body.classList.add("scrolled");
    } else {
      body.classList.remove("scrolled");
    }
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToggle() {
    document.body.classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
  }

  document.querySelectorAll("#navmenu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (document.body.classList.contains("mobile-nav-active")) {
        mobileNavToggle();
      }
    });
  });

  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  const preloader = document.getElementById("preloader");
  if (preloader) {
    window.addEventListener("load", () => preloader.remove());
  }

  const scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (!scrollTop) return;
    if (window.scrollY > 100) {
      scrollTop.classList.add("active");
    } else {
      scrollTop.classList.remove("active");
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  window.addEventListener("load", () => {
    if (window.AOS) {
      window.AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }
  });

  if (window.PureCounter) new window.PureCounter();

  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
      const config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        if (window.initSwiperWithCustomPagination) {
          window.initSwiperWithCustomPagination(swiperElement, config);
        }
      } else if (window.Swiper) {
        new window.Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  const pricingContainers = document.querySelectorAll(
    ".pricing-toggle-container"
  );

  pricingContainers.forEach((container) => {
    const pricingSwitch = container.querySelector(
      '.pricing-toggle input[type="checkbox"]'
    );
    const monthly = container.querySelector(".monthly");
    const yearly = container.querySelector(".yearly");

    pricingSwitch.addEventListener("change", () => {
      const items = container.querySelectorAll(".pricing-item");

      if (pricingSwitch.checked) {
        monthly.classList.remove("active");
        yearly.classList.add("active");
        items.forEach((i) => i.classList.add("yearly-active"));
      } else {
        monthly.classList.add("active");
        yearly.classList.remove("active");
        items.forEach((i) => i.classList.remove("yearly-active"));
      }
    });
  });
}
