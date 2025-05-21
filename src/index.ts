import 'dotenv/config';

import { connectToDatabase } from "./adapters/database/mongoConnection"
import { startHttpServer } from './adapters/express/expressEntrypoint';

const startServer = async () => {
    if (!process.env.MONGODB_CONNECTION_STRING) {
        throw new Error('MONGODB_CONNECTION_STRING is not defined')
    }

    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined')
    }

    if (!process.env.HTTP_PORT) {
        throw new Error('HTTP_PORT is not defined')
    }

    await connectToDatabase(process.env.MONGODB_CONNECTION_STRING)

    startHttpServer(parseInt(process.env.HTTP_PORT))
}


startServer()