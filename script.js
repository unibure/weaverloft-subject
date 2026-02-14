"use strict";

// intro hero 슬라이드 기능
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

  // 슬라이드 autoplay 기능
  const carousel = new Swiper(container, options);
  const toggleBtn = document.querySelector(".swiper-toggle");
  if (!toggleBtn) return;
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

// 모달 기능
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
  // esc 누르면 modal닫히게
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("modal-open")) return;
    if (e.key === "Escape") {
      modal.classList.remove("modal-open");
    }
  });
}

// 추천 검색어 드롭다운
searchDrop();
function searchDrop() {
  const headerUtil = document.querySelector(".header-utils");
  if (!headerUtil) return;
  const searchBox = headerUtil.querySelector(".search-box");
  const dropBox = searchBox.querySelector(".search-dropdown");
  const dropTags = dropBox.querySelectorAll(".drop-list .tag-btn");
  const input = searchBox.querySelector("input");

  // 드롭다운 열고 닫기
  document.addEventListener("click", (e) => {
    if (searchBox.contains(e.target)) {
      dropBox.classList.add("active");
    } else {
      dropBox.classList.remove("active");
    }
  });
  //추천 검색어 클릭
  dropTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      const text = tag.textContent.replace("#", "").trim();
      input.value = text;
      input.focus();
    });
  });
}

// 컨텐츠 탭 버튼 기능
cardTab();
function cardTab() {
  const cateBtn = document.querySelectorAll(".category-list .tag-btn");
  const cards = document.querySelectorAll(".grid-container .card");
  const mapping = [[0, 1, 2, 3], [0, 1], [2], [3]];

  cateBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      cateBtn.forEach((b) => {
        b.classList.remove("active");
      });
      cards.forEach((item) => {
        item.classList.remove("active");
      });
      btn.classList.add("active");

      mapping[index].forEach((cardIdx) => {
        cards[cardIdx].classList.add("active");
      });
    });
  });
}
