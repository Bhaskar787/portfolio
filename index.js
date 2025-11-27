document.addEventListener("DOMContentLoaded", () => {
  // NAV toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");
  navToggle?.addEventListener("click", () => navList.classList.toggle("show"));

  // Typed.js
  const typedEl = document.getElementById("typed-element");
  if (typedEl && window.Typed) {
    new Typed(typedEl, {
      strings: ["Web Developer", "Graphic Designer", "Web Designer"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1200,
      loop: true,
    });
  }

  // Active link
  document.querySelectorAll(".nav-link").forEach((a) => {
    if (a.href === location.href) a.classList.add("active");
  });

  // Project modal
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalTags = document.getElementById("modal-tags");

  document.querySelectorAll(".view-project").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".project-card");
      if (!card || !modal) return;
      modalTitle.textContent =
        card.dataset.title || card.querySelector("h3").textContent;
      modalDesc.textContent =
        card.dataset.desc || card.querySelector(".text-gray").textContent;
      modalTags.innerHTML = "";
      card.dataset.tags?.split(",").forEach((t) => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = t.trim();
        modalTags.appendChild(span);
      });
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  document.querySelectorAll(".modal-close").forEach((btn) =>
    btn.addEventListener("click", () => {
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    })
  );
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.getAttribute("aria-hidden") === "false") {
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  });
});
