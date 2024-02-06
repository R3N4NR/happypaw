import { Request, Response } from "express";
import { DeleteUserService } from "../../services/User/DeleteUserService";
import statusCodeHTTP from "../../utils/helpers/statusCodeHTTP";

class DeleteUserController{

    async handle(req: Request, res: Response){
        try{
        const user_id = req.query.user_id as string;

        const deleteService = new DeleteUserService();

        const user = await deleteService.execute(user_id)

        return res.status(statusCodeHTTP('SUCCESSFUL')).json(user);
    }catch(err){
        return res.status(statusCodeHTTP('BAD REQUEST')).json(err);
    }
}
}

export {DeleteUserController};