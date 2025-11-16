import express, { Request, Response } from "express";
import type { Route } from "./decorators";
import { IocContainer } from "./ioc-container";
import { Constructor } from "./ioc-container";


class NestFactoryStatic {
    private app = express()
    private ioc = new IocContainer()

    async create(rootModule: Constructor) {
        const providers: Constructor[] = Reflect.getMetadata('providers', rootModule)
        const controllers: Constructor[] = Reflect.getMetadata('controllers', rootModule)

       
        providers.forEach((provider) => this.ioc.resolve(provider))

        controllers.forEach((controller) => this.registerController(controller))

        return this.app
    }

    registerController(controller: Constructor) {
        const controllerInstance = this.ioc.resolve(controller)

        const prefix = Reflect.getMetadata('prefix', controller)
        const routes = Reflect.getMetadata('routes', controller)

        routes.forEach((route: Route) => {
            this.app[route.method](`${prefix}${route.path}`, (req, res) => {
                const result = route.handler.call(controllerInstance)
                res.json(result)
            })
        })
    }
}

export const NestFactory = new NestFactoryStatic()