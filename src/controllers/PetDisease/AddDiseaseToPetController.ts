import { Request, Response } from "express";
import { AddVaccineToPetService } from "../../services/PetVaccine/AddVaccineToPetService";

class AddDiseaseToPetController{
    
    async handle(req: Request, res: Response){

        const { pet_id, disease_id, assignedBy, healed } = req.body;
        const addDiseaseService = new AddVaccineToPetService();

        const petDisease = await addDiseaseService.execute(
            pet_id, disease_id, assignedBy, healed
        )

        return res.json(petDisease)
    }
}

export {AddDiseaseToPetController};