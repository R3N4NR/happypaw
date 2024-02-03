import { PetProps } from "../../models/interfaces/PetProps";
import prismaClient from "../../prisma/prismaClient";
import { validateFields } from "../../utils/validateFields";

class CreatePetService {

    async execute({name,age,picture,color, user_id, breed_id, species_id}: PetProps){
    
        const fieldEmpty = validateFields(name,age, picture, color)

        if(fieldEmpty){
            throw new Error("Todos os campos devem ser preenchidos")
        }
        if(breed_id || species_id === undefined){
            
        }
        try{
        const pet = await prismaClient.pet.create({
            data:{
                name: name,
                age: Number(age),
                picture: picture,
                color: color,
                breed_id: breed_id,
                species_id: species_id,
                user_id: user_id
            },
            select:{
                name: true,
                age: true,
                color: true,
                picture: true,
                breed_id: true,
                user_id: true,
                species_id: true
            }
        })
        return pet
    }
catch(err){
    console.log("Erro: ", err);
    throw new Error('Houve um erro ao cadastrar o seu pet !')
}
}
}

export {CreatePetService};