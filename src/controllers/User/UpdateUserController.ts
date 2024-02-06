import { Request, Response } from "express";
import { UpdateUserService } from "../../services/User/UpdateUserService";
import statusCodeHTTP from "../../utils/helpers/statusCodeHTTP";
import { updateError } from "../../utils/errors/updateError";

class UpdateUserController {
    async handle(req:Request, res: Response){

        
        const {id, name,email, password, roles, picture,points,surname,telephone} = req.body;

        const updateService = new UpdateUserService();

        const user = await updateService.execute({
            id, 
            name,
            email, 
            password, 
            roles, 
            picture,
            points,
            surname,
            telephone
        })
        return res.json(user)
    
}
}
export {UpdateUserController};