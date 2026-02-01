export class CookieManager {

  static set(name, value, days = 7) {
    const d = new Date();
    d.setTime(d.getTime() + days * 86400000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
  }

  static get(name) {
    const value = document.cookie
      .split("; ")
      .find(row => row.startsWith(name + "="))
      ?.split("=")[1];

    return value ? decodeURIComponent(value) : null;
  }

  static delete(name){
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  }

  static getJSON(name, fallback = null) {
    const value = this.get(name);
    if (!value) return fallback;
    try {
      return JSON.parse(value);
    } catch {
      return fallback;
    }
  }

  static setJSON(name, value, days = 7) {
    this.set(name, JSON.stringify(value), days);
  }
}
