import { Router } from 'express';
import { UserController } from './user';

type ControllerClass = new () => { path: string; router: Router };

export const controllers: ControllerClass[] = [
    UserController
]
