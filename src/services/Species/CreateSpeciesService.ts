import { SpeciesProps } from "../../models/interfaces/SpeciesProps";
import prismaClient from "../../prisma/prismaClient";
import { validateFields } from "../../utils/validateFields";

class CreateSpeciesService{
    async execute({name}: SpeciesProps){
    const alreadyExists = await prismaClient.species.findFirst({
        where: {
            name: name
        }
    })

    if(alreadyExists){
        throw new Error("Espécie já cadastrada !")
    }

    if(validateFields(name)){
        throw new Error("Todos os campos devem ser preenchidos !")
    }

    try{
        const breed = await prismaClient.species.create({
            data:{
                name: name
            }, 
            select:{
                id: true,
                name: true,
            }
        })

        return breed;
    }catch(err){
        console.log("Error: ", err);
        throw new Error("Houve um erro ao cadastrar a raça !")
    }
}
}

export {CreateSpeciesService};