import { Response, Request } from "express";
import { CreateVaccineService } from "../../services/Vaccine/CreateVaccineService";

class CreateVaccineController{

    async handle(req: Request, res: Response){

        const createVaccineService = new CreateVaccineService();

        const {name} = req.body;
        try{
            const vaccine = await createVaccineService.execute({
                name
            })

            return res.json(vaccine)
        }catch(err){
            console.log("Error: ", err);
            throw new Error("Houve um erro ao cadastrar a raça ! (controller)")
        }
    }
}

export {CreateVaccineController};
