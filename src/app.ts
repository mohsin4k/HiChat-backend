import express , {Express} from 'express';
import {HiChatServer} from './setupServer';
class Application
{
    public initialize(): void{
    const app: Express =express();
    const server: HiChatServer =new HiChatServer(app);
    server.start();
    }
}