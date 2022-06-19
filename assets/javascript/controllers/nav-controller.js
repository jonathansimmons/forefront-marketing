import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
  static targets = ["header"]

  connect() {
    this.navOpen = false
    this.nav = document.getElementById("mobile-nav")
    this.overlay = document.createElement("div")
    this.overlay.id = "nav-overlay"
    this.overlay.dataset.action = "click->nav#close"
    this.resizeHeaderOnScroll()
    this.setupHeader()
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

  resizeHeaderOnScroll () {
    document.addEventListener("scroll", () => {
     this.setupHeader()
    })
  }

  setupHeader(){
    if (window.innerWidth <= 480 || window.scrollY > 10) {
      this.headerTarget.classList.remove("sm:h-40")
      this.headerTarget.classList.add("sm:h-16")
    } else {
      this.headerTarget.classList.remove("sm:h-16")
      this.headerTarget.classList.add("sm:h-40")
    }
  }

}
