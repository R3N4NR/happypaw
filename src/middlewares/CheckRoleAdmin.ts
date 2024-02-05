import { ROLE } from "../config/UserRoles"
import {Request, Response, NextFunction} from 'express';


const CheckRoleAdmin = (req:Request, res: Response, next: NextFunction) => {

    const user = req.body.user;

    if(user.role === ROLE.ADMIN){
        next();
    }else{
        res.status(401);
    }
}

export {CheckRoleAdmin};