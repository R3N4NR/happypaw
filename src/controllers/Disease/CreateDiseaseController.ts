import { Request, Response } from "express";
import { CreateDiseaseService } from "../../services/Diseases/CreateDiseaseService";

class CreateDiseaseController{

    async handle(req: Request, res: Response){

        const { name } = req.body

        const createDisease = new CreateDiseaseService();

        const disease = await createDisease.execute({
            name
        })

        return res.json(disease)
    }
}
export {CreateDiseaseController};