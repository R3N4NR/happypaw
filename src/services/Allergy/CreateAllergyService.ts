import { empty } from "@prisma/client/runtime/library";
import { AllergyProps } from "../../models/interfaces/AllergyProps";
import prismaClient from "../../prisma/prismaClient";
import { alreadyExistsError } from "../../utils/errors/alreadyExistsError";
import { validateFields } from "../../utils/validateFields";
import { emptyFields } from "../../utils/errors/emptyFields";
import { createError } from "../../utils/errors/createError";

class CreateAllergyService{

    async execute({name} : AllergyProps){

        const alreadyExists = await prismaClient.allergy.findFirst({
            where: {
                name: name
            }
        })
    
        if(alreadyExists){
            alreadyExistsError
        }
    
        if(validateFields(name)){
            emptyFields();
        }

        try{
            const allergy = await prismaClient.allergy.create({
                data: {
                    name: name
                },
                select: {
                    id: true,
                    name: true
                }
            })

            return allergy;
        }catch(err){
            createError(err, "allergy");
        }
    }
}

export {CreateAllergyService};