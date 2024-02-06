import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";
import { ROLE } from "../../config/UserRoles";


class CreateUserController{

    async handle(req: Request, res: Response){
        const createUserService = new CreateUserService();

        const {name, email,password, role_ids, points,surname,telephone} = req.body
        
       const roles = await role_ids.split(',');

       
        try{
            if(!req.file){
                throw new Error("Você enviar uma imagem")
            }else{
        const {originalname, filename: picture} = req.file;
        const user = await createUserService.execute({
            name,
            surname,
            email,
            password,
            picture,
            roles,
            points,
            telephone,
        })

        return res.json(user);
    }
    }catch(err){
        console.log("Error: ", err);
        throw new Error('There was an error creating the user.')
    }
}
}
export {CreateUserController}