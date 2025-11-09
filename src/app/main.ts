import { AppController } from "./app.controller";
import { NestFactory } from "../core";
import { AppService } from "./app.serivce";

async function bootstrap() {
    const app = await NestFactory.create({
        controller: AppController,
        provider: AppService
    })

    app.listen(3000, () => {
        console.log('SERVER STARTED ON localhost:3000')
    })
}

bootstrap()