import express, { Request, Response, NextFunction, response, request} from 'express'
import "express-async-errors";
import cors from 'cors';
import path from "path"
import { router } from './routes';

const port = 3333;
const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.use('/files', express.static(path.resolve(__dirname, "..", "tmp")))

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message,

        })
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server Error'
    })
})

app.listen(port, () => {
    console.log(`Server rodando na porta : (${port})`)
})

app.use((req, res, next) => {
    console.log('Nome completo da rota:', req.url);
    next();
  });