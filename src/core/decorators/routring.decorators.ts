import { AppController } from "../../app"

export function Controller(prefix: string): ClassDecorator {
    return (target) => {
        Reflect.defineMetadata('prefix', prefix, target)
    }
}

export type Route = {
    method: 'get' | 'post' | 'delete' | 'patch' | 'put',
    path: string,
    handler: any
}

export function Get(path: string): MethodDecorator {
    return (target, _, descriptor) => {
        if (!descriptor.value) return
        const routes = Reflect.getMetadata('routes', target.constructor) || []

        const route: Route = {
            method: 'get',
            path,
            handler: descriptor.value
        }

        routes.push(route)

        Reflect.defineMetadata('routes', routes, target.constructor)
    }
}