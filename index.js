document.addEventListener("DOMContentLoaded", () => {

  /* ================== NAVBAR TOGGLE ================== */
  const navToggle = document.querySelector(".nav-toggle");  // ☰ button
  const navList   = document.querySelector(".nav-list");     // menu list

  navToggle?.addEventListener("click", (e) => {
    e.stopPropagation();       // prevents auto close when button clicked
    navList.classList.toggle("show");
  });

  // Hide navbar when clicking anywhere outside menu OR toggle btn
  document.addEventListener("click", (e) => {
    if (!navList.contains(e.target) && !navToggle.contains(e.target)) {
      navList.classList.remove("show");
    }
  });



  /* ================== TYPED JS ================== */
  const typedEl = document.getElementById("typed-element");
  if (typedEl && window.Typed) {
    new Typed(typedEl, {
      strings: ["Web Developer", "Graphic Designer", "UI/UX Designer"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1200,
      loop: true,
    });
  }



  /* ================== ACTIVE NAV LINK ================== */
  document.querySelectorAll(".nav-link").forEach((a) => {
    if (a.href === location.href) a.classList.add("active");
  });



  /* ================== PROJECT MODAL ================== */
  const modal      = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc  = document.getElementById("modal-desc");
  const modalTags  = document.getElementById("modal-tags");

  document.querySelectorAll(".view-project").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".project-card");
      if (!card || !modal) return;

      modalTitle.textContent = card.dataset.title || card.querySelector("h3").textContent;
      modalDesc.textContent  = card.dataset.desc  || card.querySelector(".text-gray").textContent;

      modalTags.innerHTML = "";
      (card.dataset.tags?.split(",") || []).forEach(t => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = t.trim();
        modalTags.appendChild(span);
      });

      modal.setAttribute("aria-hidden","false");
      document.body.style.overflow = "hidden"; // stop background scroll
    });
  });

  // close modal via button
  document.querySelectorAll(".modal-close").forEach(btn => 
    btn.addEventListener("click", closeModal)
  );

  // close modal clicking outside modal box
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // escape key close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.getAttribute("aria-hidden") === "false") {
      closeModal();
    }
  });

  function closeModal(){
    modal.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
  }

});


