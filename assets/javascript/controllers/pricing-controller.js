import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
  static targets = [ "option", "integration" ]

  connect() {
    this.state = {
      size: null,
      integrations: null
    }
    this.integrationSelection = document.getElementById("integration-selection")
    this.planResult = document.getElementById("plan-result")
  }

  selectSize(e) {
    this.optionTargets.forEach( (option) => {
      option.classList.remove("selected")
    } )
    e.currentTarget.classList.add("selected")
    this.state.size = e.currentTarget.dataset.value
    this.update()
  }

  selectIntegrations(e) {
    this.integrationTargets.forEach( (option) => {
      option.classList.add("not-selected")
    } )
    e.currentTarget.classList.remove("not-selected")
    this.state.integrations = e.currentTarget.dataset.value
    this.update()
  }

  update() {
    this.integrationSelection.classList.remove("hidden")
    setTimeout( () => {
      if (this.state.size == "small") {
        this.integrationSelection.querySelector("[data-question]").classList.remove("opacity-0")
        this.integrationSelection.querySelector("[data-question]").classList.add("opacity-100")
        this.integrationSelection.querySelector("[data-included]").classList.add("opacity-0")
        this.integrationSelection.querySelector("[data-included]").classList.remove("opacity-100")

        if (this.state.integrations == "yes") {
          this.showPlan("medium")
        }
        else if (this.state.integrations == "no") {
          this.showPlan("small")
        } else {
          this.planResult.querySelectorAll(`[data-plan]`).forEach((p) => {
            p.classList.add("opacity-0")
            p.classList.remove("opacity-100")
          })
        }
      }
      if (this.state.size == "medium" || this.state.size == "large") {
        this.resetIntegrations()
        this.integrationSelection.querySelector("[data-question]").classList.add("opacity-0")
        this.integrationSelection.querySelector("[data-question]").classList.remove("opacity-100")
        this.integrationSelection.querySelector("[data-included]").classList.remove("opacity-0")
        this.integrationSelection.querySelector("[data-included]").classList.add("opacity-100")
        this.showPlan(this.state.size)
      }
    }, 1)

  }

  showPlan(plan) {
    this.planResult.classList.remove("hidden")
    setTimeout(() => {
      this.planResult.querySelectorAll(`[data-plan]:not([data-plan="${plan}"])`).forEach((p) => {
        p.classList.add("opacity-0")
        p.classList.remove("opacity-100", "z-10")
      })
      this.planResult.querySelector(`[data-plan="${plan}"]`).classList.remove("opacity-0")
      this.planResult.querySelector(`[data-plan="${plan}"]`).classList.add("opacity-100", "z-10")
    }, 1)
  }

  resetIntegrations() {
    this.state.integrations = null
    this.integrationTargets.forEach( (option) => {
      option.classList.remove("not-selected")
    } )
  }
}
