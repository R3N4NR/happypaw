import { Request, Response } from "express";
import { GetAllUsersService } from "../../services/User/GetAllUsersService";
import statusCodeHTTP from "../../utils/helpers/statusCodeHTTP";

class GetAllUsersController{

    async handle(req: Request, res: Response){
        try{
            
        const getService = new GetAllUsersService();

        const users = await getService.execute();

        return res.status(statusCodeHTTP('SUCCESSFUL')).json(users);
        } catch(err){
            return res.status(statusCodeHTTP('BAD REQUEST')).json(err);
        }
    }
}

export {GetAllUsersController};