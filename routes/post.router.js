const express = require("express")

const routes = express.Router()

routes.get("/home", (req, res) => {
    res.send("Welcome Home Pangag")
})
routes.get("/about", (req, res) => {
    res.send("About Pangag")
})
routes.get("/contact", (req, res) => {
    res.send("Contacts of Pangag")
})

module.exports = routes