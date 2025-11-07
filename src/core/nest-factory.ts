import express, { Request, Response } from "express";
import type { Route } from "./decorators";

export class NestFactory {
    static async create(ControllerClass: any) {
        const app = express()

        const controllerInstance = new ControllerClass()

        const prefix = Reflect.getMetadata('prefix', ControllerClass)
        const routes = Reflect.getMetadata('routes', ControllerClass)

        routes.forEach((route: Route) => {
            app[route.method](`${prefix}${route.path}`, (req, res) => {
                const result = route.handler.call(controllerInstance)
                res.json(result)
            })
        })

        return app
    }
}