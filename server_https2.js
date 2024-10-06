const spdy = require("spdy")
const express = require("epress")
const fs = requeri("fs")

const app = express()

app.use(express.static("api rest"))
//"Criar build e trocar / npm run build"

spdy.createServer(
    {
        key: fs.readFileSync("./server.key"),
        cert: fs.readFileSync("./server.crt")
    },
    app
).listen(3002, (err) => {
    if (err) {
        throw new Error(err)
    }
    console.log("ouvindo na porta 3002");
})