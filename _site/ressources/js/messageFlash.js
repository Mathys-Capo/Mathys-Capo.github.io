const flash = document.getElementById("flash");
const title = document.getElementById("flash_title");
const text = document.getElementById("flash_text");
const logo = document.getElementById("flash_logo_img");

export const FlashLogos = Object.freeze({
  INFO: "../ressources/img/messageFlash/megaphone.png",
  // ERROR: "ressources/img/error.png",
  // SUCCESS: "ressources/img/success.png",
});

// 🔁 File d’attente
const queue = [];
let isShowing = false;

export class MessageFlash { 
  /**
   * @param {string} titre
   * @param {string} message
   * @param {string} logo
   */
  constructor(titre, message, logo = FlashLogos.INFO) {
    this.titre = titre;
    this.message = message;
    this.logo = logo;
  }

  see() {
    queue.push(this);
    processQueue();
  }
}

function processQueue() {
  if (isShowing || queue.length === 0) return;

  isShowing = true;
  const msg = queue.shift();

  title.textContent = msg.titre;
  text.textContent = msg.message;
  logo.src = msg.logo;  

  // relance propre de l’animation
  flash.classList.remove("flash-show");
  void flash.offsetWidth; // force reflow
  flash.classList.add("flash-show");

  function onAnimationEnd(e) {
    if (e.animationName !== "flash-out") return;

    flash.classList.remove("flash-show");
    flash.removeEventListener("animationend", onAnimationEnd);

    isShowing = false;
    processQueue(); // message suivant
  }

  flash.addEventListener("animationend", onAnimationEnd);
}

