import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
  static targets = [ "element" ]

  connect() {
    window.requestAnimationFrame(this.checkMove.bind(this, this.elementTargets))
  }

  checkMove(targets) {
    if (window.outerWidth > 768) {
      let buffer = 25
      targets.forEach( (element) => {
        let topOffset = window.scrollY + window.innerHeight + buffer - this.getOffsetTop(element);
        let bottomOffset = this.getOffsetTop(element) + element.scrollHeight - window.scrollY - buffer
        let onScreen = topOffset > 0 && bottomOffset > 0
        let percentageFromCenter = (topOffset - element.scrollHeight/2 - window.innerHeight/2)/(window.innerHeight/2 + element.scrollHeight/2)

        if (onScreen) {
          this.move(element, percentageFromCenter)
        }
      })
    } else {
      targets.forEach( (element) => {
        this.move(element, 0)
      })
    }
    window.requestAnimationFrame(this.checkMove.bind(this, this.elementTargets))
  }

  move(element, percentage) {
    let distance = element.dataset.parallaxDistance * -1
    element.style.transform = `translateY(${Math.floor(percentage * distance)}px)`
  }

  getOffsetTop(element) {
    if (!element) return 0;
    return this.getOffsetTop(element.offsetParent) + element.offsetTop;
  }
}
