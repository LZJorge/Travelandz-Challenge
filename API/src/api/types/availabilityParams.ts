import { FromType } from './fromType';

export type TransferAvailabilityParams = {
    from: {
        type: FromType,
        code: string
    },
    to: {
        type: FromType,
        code: string
    },
    outboundDate: string,
    inboundDate?: string,
    occupancy: {
        adults: number,
        children: number,
        infants: number
    }
}