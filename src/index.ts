import { AppDataSource } from './data-source';
import express from 'express';
import router from './router';
import { errorMiddleware } from './middlewares/error';

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());

    app.use(router);

    app.use(errorMiddleware);
    return app.listen(process.env.PORT)
});
