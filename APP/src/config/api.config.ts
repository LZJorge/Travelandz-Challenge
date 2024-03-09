export class ApiConfig {
    url!: string;

    constructor() {
        this.setUrl()
    }

    setUrl(): void {
        const API_URL = import.meta.env.VITE_API_URL

        if(!API_URL || API_URL === '') {
            throw new Error('API_URL is not defined')
        }

        this.url = API_URL
    }
}

export default new ApiConfig()