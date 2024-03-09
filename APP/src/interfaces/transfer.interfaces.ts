export interface GetTransferPayload {
    from: {
        type: 'IATA' | 'ATLAS',
        code: string
    },
    to: {
        type: 'IATA' | 'ATLAS',
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

export interface GetTransferResponse {
    services: {
        id: number,

        vehicle: {
            code: string,
            name: string
        },

        rateKey: string,
        price: {
            totalAmount: number,
            netAmount: number,
            currencyId: string
        },

        minPaxCapacity: number,
        maxPaxCapacity: number,

        transferDetailInfo: {
            id: number,
            name: string,
            description: string,
            type: 'GENERAL_INFO'
        }[],
        
        links: {
            rel: 'self' | 'confirm',
            href: '/availability' | '/booking',
            method: 'GET' | 'POST'
        }[]  
    }[]
}