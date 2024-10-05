const express = require("express")
const route = require("./routes/post.router.js")

const app = express()

app.use(route)

app.listen(4000, () => {
    console.log("server started!");
})