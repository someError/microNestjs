import express, { Request, Response } from "express";
import type { Route } from "./decorators";
import { IocContainer } from "./ioc-container";

type OptionsType = {
    controller: any,
    provider: any
}

export class NestFactory {
    // ControllerClass: any => options: OptionsType
    static async create(options: OptionsType) {
        const app = express()
        const ioc = new IocContainer()

        ioc.resolve(options.provider)

        const controllerInstance = ioc.resolve(options.controller)


        const prefix = Reflect.getMetadata('prefix', options.controller)
        const routes = Reflect.getMetadata('routes', options.controller)

        routes.forEach((route: Route) => {
            app[route.method](`${prefix}${route.path}`, (req, res) => {
                const result = route.handler.call(controllerInstance)
                res.json(result)
            })
        })

        

        return app
    }
}