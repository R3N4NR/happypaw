
import {Request, Response} from 'express';
import { UserDetailService } from '../../services/User/UserDetailService';
class UserDetailController{

    async handle(req:Request, res:Response){
        const user_id = req.user_id;

        const detailUserService = new UserDetailService();

        const user = await detailUserService.execute(user_id);


        return res.json(user);
    }
}
export {UserDetailController};