import express, { Application } from "express"
import * as bodyParser from "body-parser"
import cors from "cors"
import { UserRoute } from "./routes/user.route"
import { OrganisationRoute } from "./routes/organisation.route"

export const setupRestEndpoints = (app: Application) => {
    const router = express.Router()
    app.use(bodyParser.json())
    app.use(express.json())
    app.use(cors())
    app.use("/", router)
    app.use("/", UserRoute())
    app.use("/", OrganisationRoute())
}