import { Controller, Get } from "../core";

@Controller('/api')
export class AppController {
    @Get('/orders')
    getOrders() {
        return { message: 'Orders' };
    }

    @Get('/users')
    getUsers() {
        return { message: 'users' };
    }
}