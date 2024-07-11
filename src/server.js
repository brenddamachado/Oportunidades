import express from "express"
import { oportunidadeRouter } from "./routes/oportunidades.router"

const app = express()
const port = 3000

app.use(express.json())

app.use(oportunidadeRouter)

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})