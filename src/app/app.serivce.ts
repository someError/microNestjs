import { Injectable } from '../core'
import { InnerService } from './inner.service'

@Injectable()
export class AppService {
    constructor(private readonly innerService: InnerService){}
    getUsers(): string {
        const externalData = this.innerService.getInnerData()
        return 'get users ' + externalData
    }

    getOrders(): string {
        return 'get orders'
    }
}