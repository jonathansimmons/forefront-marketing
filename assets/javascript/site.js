import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
import navController from "./controllers/nav-controller.js"
window.Stimulus = Application.start()


window.Stimulus.register("nav", navController)

