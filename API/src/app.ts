import Express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';

import { TransferRouter } from './router/transfer.router';

export class App {
    port: number;
    app: Express.Application;
    router: TransferRouter;
    server: any;
    
    /**
     * @param {number} port - the port number
     */
    constructor(port: number) {
        this.port = port;
        this.app = Express();

        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    /**
     * Initializes the middlewares for the app.
     * 
     * @returns {void}
     */
    private initializeMiddlewares(): void {
        this.app.use(Express.json());
        this.app.use(Express.urlencoded({ extended: true }));

        const accessLogStream = fs.createWriteStream('./logs/access.log', { flags: 'a' });

        this.app.use(morgan('common', { stream: accessLogStream }));
        this.app.use(cors({
            origin: '*',
            methods: ['POST', 'PUT', 'PATCH', 'GET', 'OPTIONS', 'HEAD', 'DELETE']
        }));
    }

    private initializeRoutes(): void {
        this.router = new TransferRouter();

        this.app.use('/api', this.router.getRouter());
    }

    /**
     * @returns {Express.Application}
     */
    public getApp(): Express.Application {
        return this.app;
    }

    /**
     * Start the server and log the server running message.
     *
     * @return {Promise<void>} 
     */
    public start(): void {
        this.server = this.app.listen(this.port);

        console.log(`Server running on http://localhost:${this.port} 🚀`);
    }

    /**
     * Stop the server if it is running.
     * 
     * @return {Promise<void>} 
     */
    public async stop(): Promise<void> {
        if(this.server) {
            await this.server.close();

            console.log('Server stopped 🛑');
        } else {
            console.log('Server is not running');
        }
    }
}

export default App;
