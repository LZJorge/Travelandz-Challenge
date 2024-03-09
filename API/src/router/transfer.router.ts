import { Router } from 'express';
import { TransferController } from '../controller/transfer.controller';

const controller = new TransferController();

export class TransferRouter {
    private readonly router: Router;

    constructor() {
        this.router = Router();

        this.initializeRoutes();
    }

    /**
     * Initialize the routes for handling HTTP requests.
     */
    private initializeRoutes(): void {
        this.router.get('/ping', (req, res) => {
            res.status(200).send('pong');
        });

        this.router.post('/transfer/availability', controller.getTransfer);
        this.router.post('/transfer/request', controller.requestService);
    }

    public getRouter(): Router {
        return this.router;
    }
}
