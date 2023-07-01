import { Application, json, urlencoded, Response, Request, NextFunction } from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import cookierSession from 'cookie-session';
import HTTP_STATUS from 'http-status-codes';
import 'express-async-errors';
import compression from 'compression';

export class HiChatServer{
    private app: Application; 

    constructor(app: Application){
        this.app = app; 
    }

    public start(): void{
        this.securityMiddleware(this.app);
        this.standardMiddleware(this.app);
        this.routeMiddleware(this.app);
        this.globalErrorHandler(this.app);
        this.startServer(this.app);
    }

    private securityMiddleware(app: Application): void
    {
        app.use(
            cookierSession({
                name: 'session',
                keys: ['test1','test2'],
                maxAge: 24*7*3600000,
                secure: false


            })
        );
        
        app.use(hpp());
        app.use(helmet());
        app.use(
            cors({
                origin: '*',
                credentials: true, //cookies will not work if credentials is not set true
                optionsSuccessStatus: 200,
                methods: ['GET','POST','PUT','DELETE','OPTIONS']

            })
        );

    }

    private standardMiddleware(app: Application): void
    {
        app.use(compression()); //helps to compress our request and response
        app.use(json({limit: '50mb'})); //sends data from server to server and throws error in case the size is greater than 50mb
        app.use(urlencoded({extended: true, limit: '50mb'})); //sedsn data from client to server and vice versa
    }

    private routeMiddleware(app: Application): void{}

    private globalErrorHandler(app: Application): void{}

    private startServer(app: Application): void{}

    private createSocketIO(httpServer: http.Server): void{}

    private startHttpServer(httpServer: http.Server): void{}

}