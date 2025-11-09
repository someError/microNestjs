type Constructor<T = any> = new (...args: any[]) => T

export class IocContainer {
    private instances = new Map<Constructor, any>()

    resolve<T> (target: Constructor<T>): T {
        if (this.instances.has(target)) {
            return this.instances.get(target)
        }

        const dependencies: Constructor[] = Reflect.getMetadata('design:paramtypes', target) || []

        const resolvedDeps = dependencies.map(dep => this.resolve(dep))

        const newInsance = new target(...resolvedDeps)

        this.instances.set(target, newInsance)

        console.log('IOC CONTAINER: Cоздан экземпляр ' + target.name)
        console.log(`IOC CONTAINER: DI для ${target.name} => ${dependencies.map(dep => dep.name+', ')}`)

        return newInsance
    }



}