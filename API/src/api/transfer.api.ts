import axios from 'axios';
import { createHash } from 'crypto';
import appConfig from '../config/app.config';
import { TransferAvailabilityParams } from './types/availabilityParams';
import { RequestServiceParams } from './types/requestServiceParams';

export class TransferApi {
    private readonly baseUrl: string;
    private readonly apiKey: string;
    private readonly apiSecret: string;

    private readonly signature: string;
    private readonly headers: { [key: string]: string };
    private readonly lang: string;

    constructor() {
        this.baseUrl = appConfig.getApiUrl();
        this.apiKey = appConfig.getApiKey();
        this.apiSecret = appConfig.getApiSecret();
        this.lang = 'en';

        this.signature = createHash('sha256').update(this.apiKey + this.apiSecret + Math.floor(Date.now() / 1000)).digest('hex');
        this.headers = {
            'Accept': 'application/json',
            'Api-key': this.apiKey,
            'X-Signature': this.signature
        };
    }

    /**
     * Retrieves the availability for a transfer based on the provided parameters.
     *
     * @param {TransferAvailabilityParams} data - the parameters for the transfer availability
     */
    public async getAvailability(data: TransferAvailabilityParams) {
        const response = await axios({
            method: 'get',
            url: `
                ${this.baseUrl}/transfer-api/1.0/availability/${this.lang}/from/${data.from.type}/${data.from.code}/to/${data.to.type}/${data.to.code}/${data.outboundDate}/${data.inboundDate}/${data.occupancy.adults}/${data.occupancy.children}/${data.occupancy.infants}
            `,
            headers: this.headers
        });

        return response.data;
    }

    public async requestService(data: RequestServiceParams) {
        const response = await axios({
            method: 'post',
            url: `
                ${this.baseUrl}/transfer-api/1.0/bookings
            `,
            headers: this.headers,
            data: {
                language: this.lang,
                holder: data.holder,
                transfers: data.transfers,
                clientReference: data.clientReference
            }
        });

        return response.data;
    }
}