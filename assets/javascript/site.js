import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
import animateCaseCard from "./controllers/animate-case-card.js"
window.Stimulus = Application.start()


window.Stimulus.register("animate-case-card", animateCaseCard)
