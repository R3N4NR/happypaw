import prismaClient from "../../prisma/prismaClient";
import { addError } from "../../utils/errors/addError";

class AddDiseaseToPet{

    async execute (pet_id: string, disease_id: string, assignedBy:string, healed: boolean){
        
        try{
        const petDisease = await prismaClient.petDisease.create({
            data:{
                pet_id: pet_id,
                disease_id: disease_id,
                assignedBy: assignedBy,
                healed: healed
            },
            select:{
                pet_id: true,
                disease_id: true,
                assignedBy: true,
                healed: true
            }
        }) 
            return petDisease;
        }catch(err){
            addError(err, "disease", "pet")
        }  
    }
}

export {AddDiseaseToPet};