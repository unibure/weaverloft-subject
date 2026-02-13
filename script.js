"use strict";

introHeroSlide();
function introHeroSlide() {
  const container = document.querySelector(".intro-hero");
  if (!container) return;
  const options = {
    pagination: {
      el: ".intro-hero .pagination-inner",
      type: "fraction",
      renderFraction(currentClass, totalClass) {
        return `
          <span class="current ${currentClass}"></span> 
          <span class="bar"></span>
          <span class="total ${totalClass}"></span>
        `;
      },
    },
    navigation: {
      nextEl: ".slide-controls .next",
      prevEl: ".slide-controls .prev",
    },
    loop: true,
    effect: "slide",
    autoplay: {
      delay: 3000,
    },
  };
  const carousel = new Swiper(container, options);
  const toggleBtn = document.querySelector(".swiper-toggle");
  toggleBtn.addEventListener("click", () => {
    if (carousel.autoplay.running) {
      carousel.autoplay.stop();
      toggleBtn.classList.add("pause");
      toggleBtn.setAttribute("aria-label", "재생");
    } else {
      carousel.autoplay.start();
      toggleBtn.classList.remove("pause");
      toggleBtn.setAttribute("aria-label", "일시정지");
    }
  });
}

initModal();
function initModal() {
  const trigger = document.querySelector(".floating-menu");
  const modal = document.querySelector(".modal-wrap");
  if (!modal || !trigger) return;

  trigger.addEventListener("click", () => {
    modal.classList.add("modal-open");
  });

  modal.addEventListener("click", (e) => {
    if (e.target.closest(".btn-close") || e.target.closest(".dimmer")) {
      modal.classList.remove("modal-open");
    }
  });
}

searchDrop();
function searchDrop() {
  const headerUtil = document.querySelector(".header-utils");
  if (!headerUtil) return;
  const searchBox = headerUtil.querySelector(".search-box");
  const dropBox = headerUtil.querySelector(".search-dropdown");

  document.addEventListener("click", (e) => {
    if (searchBox.contains(e.target)) {
      dropBox.classList.add("active");
    } else {
      dropBox.classList.remove("active");
    }
  });
}

//추가
// 1. 모달,추천검색어 esc 닫기
// 2. 추천검색어 클릭시 input 값 채우기
// 3. 콘텐츠 탭 구성
