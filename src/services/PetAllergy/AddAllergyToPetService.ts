import prismaClient from "../../prisma/prismaClient";
import { addError } from "../../utils/errors/addError";

class AddAllergyToPetService{

    async execute (pet_id: string, allergy_id: string, assignedBy:string){
        
        try{
        const petAllergy = await prismaClient.petAllergy.create({
            data:{
                pet_id: pet_id,
                allergy_id: allergy_id,
                assignedBy: assignedBy,
                
            },
            select:{
                pet_id: true,
                allergy_id: true,
                assignedBy: true,
            }
        }) 
            return petAllergy;
        }catch(err){
            addError(err, "allergy", "pet")
        }  
    }
}

export {AddAllergyToPetService};