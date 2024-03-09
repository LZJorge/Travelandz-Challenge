import App from './app';
import appConfig from './config/app.config';

/**
 * The main function that initializes an App, starts it, and does not have any parameters or return value.
 */
function main() {
    const app = new App(appConfig.getPort());

    app.start();
}

main();