import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import statusCodeHTTP from "../utils/helpers/statusCodeHTTP";

interface PayLoad {
    sub: string;
    roles: string[];
}

const AuthenticatedRoles = (allowedRoles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const authToken = req.headers.authorization;

        if (!authToken) {
            return res.status(401).end();
        }

        const [, token] = authToken.split(' ');

        try {
            const decodedToken = verify(token, process.env.JWT_SECRET) as PayLoad;

            const { sub, roles } = decodedToken;
        
            const intersection = allowedRoles.filter(role => roles.includes(role));

            if (intersection.length === 0) {
                res.status(statusCodeHTTP('UNAUTHORIZED')).end();
            }

            req.user_id = sub;
            req.roles = roles;

            return next();
        } catch (err) {
            console.error("Error during token verification:", err);
            return res.status(401).end();
        }
    };
};

export default AuthenticatedRoles;