import { Router, Request, Response } from 'express';

export class UserController {
    readonly path = '/users';
    readonly router = Router();

    constructor() {
        this.router.get("/", this.getAll);
        this.router.post("/", this.create);
    }

    getAll(req: Request, res: Response) {
        res.send('Todos los usuarios');
    }

    create(req: Request, res: Response) {
        res.send('Usuario creado');
    }
}
