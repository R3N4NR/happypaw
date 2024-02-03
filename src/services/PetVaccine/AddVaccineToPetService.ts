import prismaClient from "../../prisma/prismaClient";

class AddVaccineToPetService{

    async execute(pet_id: string, vaccine_id: string, assignedBy: string){

        try{
        const petVaccine = await prismaClient.petVaccine.create({
            data:{
                pet_id: pet_id,
                vaccine_id: vaccine_id,
                assignedBy: assignedBy
            },
             select: {
                pet_id: true,
                vaccine_id: true,
                assignedBy: true
             }
        })

        return petVaccine;
    }catch(err){
        console.log("Error", err)
        throw new Error("Houve um erro ao adicionar a vacina ao pet !")
    }
    }
}

export {AddVaccineToPetService};