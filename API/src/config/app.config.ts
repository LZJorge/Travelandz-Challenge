import { config } from 'dotenv';

// Loads the .env file
config();

// Available environments
enum Env {
    PRODUCTION = 'production',
    DEVELOPMENT = 'development'
}

export class AppConfig {
    private NODE_ENV: string;
    private PORT: number;
    private HOST: string;

    private API_URL: string;
    private API_KEY: string;
    private API_SECRET: string;

    constructor() {
        /**
         * All the environment variables must be defined, if not, throws an error
         * Do it by this way allow us to make the required validations in each variable
         */
        this.setNodeEnv();
        this.setPort();
        this.setHost();

        this.setApiUrl();
        this.setApiKey();
        this.setApiSecret();
    }

    // --- Setters ---
    private setNodeEnv() {
        const { NODE_ENV } = process.env;

        if(!NODE_ENV) {
            throw new Error('NODE_ENV must be defined');
        }

        if(NODE_ENV !== Env.PRODUCTION && NODE_ENV !== Env.DEVELOPMENT) {
            throw new Error(`NODE_ENV must be either ${Env.PRODUCTION} or ${Env.DEVELOPMENT}`);
        }

        this.NODE_ENV = NODE_ENV;
    }

    private setPort() {
        const PORT = Number(process.env.PORT);

        if(!PORT) {
            throw new Error('PORT must be defined');
        }

        this.PORT = PORT;
    }

    private setHost() {
        const { HOST } = process.env;

        if(!HOST) {
            throw new Error('HOST must be defined');
        }

        this.HOST = HOST;
    }

    private setApiUrl() {
        const { API_URL } = process.env;

        if(!API_URL) {
            throw new Error('API_URL must be defined');
        }

        this.API_URL = API_URL;
    }

    private setApiKey() {
        const { API_KEY } = process.env;

        if(!API_KEY) {
            throw new Error('API_KEY must be defined');
        }

        this.API_KEY = API_KEY;
    }

    private setApiSecret() {
        const { API_SECRET } = process.env;

        if(!API_SECRET) {
            throw new Error('API_SECRET must be defined');
        }

        this.API_SECRET = API_SECRET;
    }

    // --- Getters ---
    public getNodeEnv(): string { return this.NODE_ENV; }
    public getApiKey(): string { return this.API_KEY; }
    public getHost(): string { return this.HOST; }
    public getPort(): number { return this.PORT; }
    public getApiUrl(): string { return this.API_URL; }
    public getApiSecret(): string { return this.API_SECRET; }
}

// Exports only one instance of AppConfig
export default new AppConfig();