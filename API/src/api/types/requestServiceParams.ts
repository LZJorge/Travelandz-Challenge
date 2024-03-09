import { Holder } from './holder';

export type RequestServiceParams = {
    holder: Holder,
    transfers: {
        rateKey: string,
        transferDetails: {
            type: 'FLIGHT' | 'CRUISE' | 'TRAIN',
            direction: 'ARRIVAL' | 'DEPARTURE',
            code: string, // Example, flight number max 7 digits
            companyName?: string
        }[]
    }[],
    
    clientReference: string,
    welcomeMessage?: string,
    remark?: string
}