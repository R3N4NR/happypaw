import { Response, Request } from "express";
import { CreateSpeciesService } from "../../services/Species/CreateSpeciesService";

class CreateSpeciesController{

    async handle(req: Request, res: Response){

        const createSpeciesService = new CreateSpeciesService();

        const {name} = req.body;
        try{
            const species = await createSpeciesService.execute({
                name
            })

            return res.json(species)
        }catch(err){
            console.log("Error: ", err);
            throw new Error("Houve um erro ao cadastrar a espécie ! (controller)")
        }
    }
}

export {CreateSpeciesController};
