import express, { Request, Response } from 'express';
import cors from 'cors';
import { controllers } from './controllers';

export const startHttpServer = (port: number) => {
    const app = express();
    app.use(express.json())
    app.use(cors())

    controllers.forEach(controller => {
        const instance = new controller();

        if (!instance.path || !instance.router) {
            throw new Error('Controller must have a path and a router')
        }

        app.use(instance.path, instance.router);
    });

    app.use((req: Request, res: Response) => {
        res.status(404)
        res.send('Not Found');
    });

    app.listen(port, () => {
        console.log(`Http Server listening on port ${port}`)
    })
}