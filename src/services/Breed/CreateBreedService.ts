import prismaClient from "../../prisma/prismaClient";
import {BreedProps} from "../../models/interfaces/BreedProps"
import { validateFields } from "../../utils/validateFields";

class CreateBreedService{
    
    async execute({name}: BreedProps){

        const alreadyExists = await prismaClient.breed.findFirst({
            where: {
                name: name
            }
        })

        if(alreadyExists){
            throw new Error("Raça já cadastrada !")
        }

        if(validateFields(name)){
            throw new Error("Todos os campos devem ser preenchidos !")
        }

        try{
            const breed = await prismaClient.breed.create({
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

export {CreateBreedService};