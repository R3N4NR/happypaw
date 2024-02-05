import { Request, Response } from "express";
import { AddVaccineToPetService } from "../../services/PetVaccine/AddVaccineToPetService";

class AddVaccineToPetController{

    async handle(req: Request, res: Response){

        const { pet_id, vaccine_id, assignedBy, dose} = req.body;
        const addVaccineService = new AddVaccineToPetService();

        const petVaccine = await addVaccineService.execute(
            pet_id, vaccine_id, assignedBy, dose
        )

        return res.json(petVaccine);
    }
}

export {AddVaccineToPetController}