import { Request, Response } from 'express';
import { TransferApi } from '../api/transfer.api';

const transfer = new TransferApi();

export class TransferController {

    public async getTransfer(req: Request, res: Response): Promise<void> {
        const { outboundDate, inboundDate } = req.body;

        const fromType = req.body.from.type;
        const fromCode = req.body.from.code;
        const toType = req.body.to.type;
        const toCode = req.body.to.code;

        const occupancyAdults = req.body.occupancy.adults;
        const occupancyChildren = req.body.occupancy.children;
        const occupancyInfants = req.body.occupancy.infants;

        if (!fromType || !fromCode || !toType || !toCode || !outboundDate || !occupancyAdults || !occupancyChildren || !occupancyInfants) {
            res.status(400).send('Faltan parámetros');
        }

        const data = {
            outboundDate,
            inboundDate,
            from: {
                type: fromType,
                code: fromCode
            },
            to: {
                type: toType,
                code: toCode
            },
            occupancy: {
                adults: occupancyAdults,
                children: occupancyChildren,
                infants: occupancyInfants
            }
        };
        
        res.send(await transfer.getAvailability(data));
    }

    public async requestService(req: Request, res: Response): Promise<void> {
        const { holder, transfers, clientReference } = req.body;
        
        const data = {
            holder,
            transfers,
            clientReference
        };

        res.send(await transfer.requestService(data));
    }
}