import { AppController } from ".";
import { NestFactory } from "../core/nest-factory";

async function bootstrap() {
    const app = await NestFactory.create(AppController)

    app.listen(3000, () => {
        console.log('SERVER STARTED ON localhost:3000')
    })
}

bootstrap()