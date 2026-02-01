import { CookieManager } from "./cookieManager.js";
import { MessageFlash } from "./messageFlash.js";

export class Success {
  
  static getAllSuccess() {
    return [
      {id: "firstConnection", titre: "Bonjour!", message: "Bonne Lecture", 
        glb:{url: "../ressources/glb/gold_star.glb", zoom: 35}
      },
      {id: "contact", titre: "Me contacter?", message: "message", 
        glb:{url: "../ressources/glb/phone.glb", zoom: 1}
      },
      {id: "visitAllPages", titre: "Le visiteur", message: "Merci", glb:{
        url: "../ressources/glb/1_euro_coin.glb", zoom: 1.5
      } }
    ];
  }

  static getAllPages(){
    return this.VISIT_ALL_PAGES;
  }

  static VISIT_ALL_PAGES = [
    "index", "projets", "cartes", "facts", "contact", "success"
  ];

  // TRACK UNE PAGE
    static trackPage(pageName) {
      let pages = CookieManager.getJSON("visitAllPages", []);

      if (!Array.isArray(pages)) {
        pages = [];
      }

      if (!pages.includes(pageName)) {
        pages.push(pageName);
        CookieManager.setJSON("visitAllPages", pages, 365);
      }

      if (pages.length === 1) this.firstConnection();

      if(pageName === 'contact')this.contacter()

      this.checkVisitAllPages();
    }


  static isDone(id) {
    if(id=='visitAllPages')return CookieManager.getJSON(id,[]).length==this.getAllPages().length   
    return CookieManager.get(id) === "true";
  }

  static checkVisitAllPages() {
    const pages = CookieManager.getJSON("visitAllPages", []);

    if (!this.sameList(pages, this.VISIT_ALL_PAGES)) return;
    if (CookieManager.get("visitAllPages_done") === "true") return;

    const m = new MessageFlash("Le visiteur", "Merci");
    m.see();

    CookieManager.set("visitAllPages_done", "true", 365);
  }


  static firstConnection(){
    if (!Success.isDone("firstConnection")) {
      const success = Success.getAllSuccess()
        .find(s => s.id === "firstConnection");

      const m = new MessageFlash(success.titre, success.message);
      m.see();

      CookieManager.set("firstConnection", "true", 365);
    }
  }

  static contacter(){
    if (!Success.isDone("contact")) {
      const success = Success.getAllSuccess()
        .find(s => s.id === "contact");

      const m = new MessageFlash(success.titre, success.message);
      m.see();

      CookieManager.set("contact", "true", 365);
    }
  }

  static sameList(a, b) {
    if (a.length !== b.length) return false;
    return [...a].sort().every((v, i) => v === [...b].sort()[i]);
  }
}
