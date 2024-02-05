import prismaClient from "../../prisma/prismaClient";
import { addError } from "../../utils/errors/addError";

class AddVaccineToPetService{

    async execute(pet_id: string, vaccine_id: string, assignedBy: string, dose: number){

        if(!dose){
            dose = 0;
        }

        try{
        const petVaccine = await prismaClient.petVaccine.create({
            data:{
                pet_id: pet_id,
                vaccine_id: vaccine_id,
                assignedBy: assignedBy,
                dose: dose
            },
             select: {
                pet_id: true,
                vaccine_id: true,
                assignedBy: true,
                dose: true,
             }
        })

        return petVaccine;
    }catch(err){
        addError(err, "vaccine", "pet")
    }
    }
}

export {AddVaccineToPetService};