import { Request, Response } from "express";
import { CreateAllergyService } from "../../services/Allergy/CreateAllergyService";


class CreateAllergyController{

    async handle(req: Request, res: Response){

        const {name} = req.body;

        const createService = new CreateAllergyService();

        const allergy = await createService.execute({
            name
        })

        return res.json(allergy);
    }
}

export {CreateAllergyController};