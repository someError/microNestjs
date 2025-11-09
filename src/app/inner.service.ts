import { Injectable } from "../core";

@Injectable()
export class InnerService {
    getInnerData (): string {
        return 'some inner data'
    }
}