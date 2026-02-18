document.addEventListener("DOMContentLoaded", () => {

  /* ================= MUSIC ================= */
  const music = document.getElementById("bgMusic");
  document.addEventListener("click", () => {
    if (music && music.paused) music.play();
  });

  /* ================= OVERLAY ================= */
  const overlay = document.getElementById("overlay");
  const overlayText = document.getElementById("overlay-text");

  function showMessage(msg) {
    overlayText.innerText = msg;
    overlay.classList.remove("hidden");
  }

  overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
  });

  /* ================= TYPING INTRO ================= */
  const introText =
    "I never planned this.\nBut on your birthday,\nmy heart wanted to do something special.";
  let i = 0;
  const introEl = document.getElementById("typing-intro");

  function typeIntro() {
    if (introEl && i < introText.length) {
      introEl.innerHTML += introText[i] === "\n" ? "<br>" : introText[i];
      i++;
      setTimeout(typeIntro, 45);
    }
  }
  typeIntro();

  /* ================= TYPING BIRTHDAY ================= */
  setTimeout(() => {
  const birthdayText =
    "HAPPY BIRTHDAY RAHUL 🤍\nMay your day be as gentle and beautiful\nas the way you exist.";

  let j = 0;
  const birthdayEl = document.getElementById("typing-birthday");
  birthdayEl.innerHTML = "";

  function typeBirthday() {
    if (j < birthdayText.length) {
      birthdayEl.innerHTML +=
        birthdayText[j] === "\n" ? "<br>" : birthdayText[j];
      j++;
      setTimeout(typeBirthday, 45);
    } else {
      // ✨ AFTER typing ends — apply styling
      birthdayEl.innerHTML = birthdayEl.innerHTML.replace(
        "RAHUL",
        "<span class='rahul'>RAHUL</span>"
      );
    }
  }

  typeBirthday();
}, 2400);


  /* ================= CLICK INTERACTIONS ================= */
  document.querySelectorAll(".poetry-card, .emotion-btn").forEach(el => {
    el.addEventListener("click", () => {
      showMessage(el.dataset.msg);
    });
  });

  /* ================= SCROLL REVEAL ================= */
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 120) {
        el.classList.add("active");
      }
    });
  });

  /* ================= FALLING HEARTS (GLOBAL) ================= */
  const hearts = document.querySelector(".hearts");
  if (hearts) {
    setInterval(() => {
      const h = document.createElement("span");
      h.innerHTML = "💗";
      h.style.left = Math.random() * 100 + "vw";
      hearts.appendChild(h);
      setTimeout(() => h.remove(), 8000);
    }, 600);
  }

});
