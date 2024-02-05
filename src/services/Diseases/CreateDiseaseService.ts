import { DiseaseProps } from "../../models/interfaces/DiseaseProps";
import prismaClient from "../../prisma/prismaClient";
import { createError } from "../../utils/errors/createError";

class CreateDiseaseService {

    async execute({name}:DiseaseProps){
        try{
        const disease = await prismaClient.disease.create({
            data: {
                name: name,

            },
            select: {
                id: true,
                name: true,
            }
        })

        return disease;
    }catch(err){
        createError(err, "disease");
    }
}
}

export {CreateDiseaseService};