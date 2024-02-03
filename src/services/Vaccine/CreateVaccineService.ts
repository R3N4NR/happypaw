import { VaccineProps } from "../../models/interfaces/VaccineProps";
import prismaClient from "../../prisma/prismaClient";
import { validateFields } from "../../utils/validateFields";

class CreateVaccineService{
    async execute({name}: VaccineProps){
    const alreadyExists = await prismaClient.vaccine.findFirst({
        where: {
            name: name
        }
    })

    if(alreadyExists){
        throw new Error("Vacina já cadastrada !")
    }

    if(validateFields(name)){
        throw new Error("Todos os campos devem ser preenchidos !")
    }

    try{
        const breed = await prismaClient.vaccine.create({
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

export {CreateVaccineService};