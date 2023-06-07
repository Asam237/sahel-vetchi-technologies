import express from "express"
import * as http from "http"
import { setupRestEndpoints } from "./src/server"
import { PORT } from "./src/shared/core/config"
import { connectToDB } from "./src/shared/core/database"

const startServer = () => {
  const app = express()
  setupRestEndpoints(app)
  const server: http.Server = http.createServer(app)
  server.listen(PORT!!, async () => {
    await connectToDB()
    console.log(`[server]: running on ${PORT}`)
  })
}

void (() => {
  startServer()
})