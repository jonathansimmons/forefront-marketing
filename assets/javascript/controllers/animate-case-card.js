import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
import { animateCSS } from "../animate.js"

export default class extends Controller {
  static targets = ["cover", "detail"]

  connect () {
    console.log("case-card")
    console.log(this.coverTarget)
    console.log(this.detailTarget)
  }

  animateIn(e) {
    console.log("animateIn")
    // e.target.classList.add('animating')
    animateCSS(this.coverTarget, "fadeOut").then(()=> {
      this.coverTarget.classList.add("hidden")
    })
    this.detailTarget.classList.remove("hidden")
    animateCSS(this.detailTarget, "fadeIn")
    // setTimeout(()=> {
    //   e.target.classList.remove('animating')
    // }, 1000)
  }

  animateOut(e) {
    // if (!e.target.classList.contains("animating")) {
      console.log("animateOut")
      animateCSS(this.detailTarget, "fadeOut").then(()=> {
        this.detailTarget.classList.add("hidden")
      })
      this.coverTarget.classList.remove("hidden")
      animateCSS(this.coverTarget, "fadeIn")
    // } else {
    //   setTimeout(() =>{
    //     this.animateOut(e)
    //   }, 500)
    // }
  }
}
