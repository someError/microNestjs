import { Controller, Get } from "../core";
import { AppService } from "./app.serivce";

@Controller('/api')
export class AppController {
    constructor(private readonly appSerivce: AppService) {}
    @Get('/orders')
    getOrders() {
        const message = this.appSerivce.getOrders()
        return { message }
    }

    @Get('/users')
    getUsers() {
        const message = this.appSerivce.getUsers()
        return { message }
    }
}