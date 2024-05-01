/// <reference types="multer" />
import { AppService } from "./app.service";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    local(file: Express.Multer.File): Promise<{
        statusCode: number;
        data: string;
    }>;
}
