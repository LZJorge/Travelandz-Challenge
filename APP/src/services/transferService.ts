import axios from 'axios';
import apiConfig from '../config/api.config';
import { GetTransferPayload, GetTransferResponse } from '../interfaces/transfer.interfaces';

/**
 * Asynchronously fetches transfers using the provided payload.
 *
 * @param {GetTransferPayload} payload - the payload for fetching transfers
 * @return {Promise<GetTransferResponse>} the response data from the transfer API
 */
export const getTransfers = async (payload: GetTransferPayload): Promise<GetTransferResponse> => {
    const response = await axios.post(
        apiConfig.url + '/api/transfer/availability',
        {
            data: payload,
            withCredentials: true
        }
    );

    if(response.status !== 200) {
        throw new Error('Failed to fetch transfers');
    }

    console.log(response.data)

    const data: GetTransferResponse = {
        ...response.data,
    }
    
    return data;
}