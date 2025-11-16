export type ModuleMetadata = {
    controllers: any[],
    providers: any[]
}


export function Module(metadata: ModuleMetadata): ClassDecorator {
    return (target) => {
        Reflect.defineMetadata('controllers', metadata.controllers, target)
        Reflect.defineMetadata('providers', metadata.providers, target)
    }
}