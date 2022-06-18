import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {

  connect() {
    this.navOpen = false
    this.nav = document.getElementById("mobile-nav")
    this.overlay = document.createElement("div")
    this.overlay.id = "nav-overlay"
    this.overlay.dataset.action = "click->nav#close"
  }

  toggle() {
    this.navOpen = !this.navOpen

    if (this.navOpen) {
      this.open()
    } else {
      this.close()
    }
  }

  open() {
    this.nav.classList.add("open")
    document.body.insertBefore(this.overlay, this.nav)
  }

  close() {
    document.getElementById("nav-overlay").remove()
    this.nav.classList.remove("open")
  }

}
