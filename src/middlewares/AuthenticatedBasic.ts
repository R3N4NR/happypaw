import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

interface PayLoad {
    sub: string;
    role: string;
}

const AuthenticatedAdmin = (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(' ');

    try {
        const decodedToken = verify(token, process.env.JWT_SECRET) as PayLoad;

        
        console.log("Decoded Token =>", decodedToken);
        
        const { sub, role } = decodedToken;

        
        // Verificar se a role é 'admin'
        if (role !== 'basic') {
            return res.status(403).json({ error: 'Acesso não autorizado para esta rota.' });
        }

        req.user_id = sub;
        req.role = role;

        return next();
    } catch (err) {
        console.error("Error during token verification:", err);
        return res.status(401).end();
    }
}

export default AuthenticatedAdmin;

