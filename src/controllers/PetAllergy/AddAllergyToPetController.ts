import { Request, Response } from "express";
import { AddAllergyToPetService } from "../../services/PetAllergy/AddAllergyToPetService";

class AddAllergyToPetController{

    async handle(req: Request, res: Response){

        const {pet_id, allergy_id, assignedBy} = req.body;

        const addAllergyService = new AddAllergyToPetService();

        const petAllergy = await addAllergyService.execute(pet_id, allergy_id, assignedBy)

        return res.json(petAllergy)
    }
}

export {AddAllergyToPetController};