import { Module } from "../core";
import { AppController } from "./app.controller";
import { AppService } from "./app.serivce";

@Module({
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}