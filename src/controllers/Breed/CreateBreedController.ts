import { Response, Request } from "express";
import { CreateBreedService } from "../../services/Breed/CreateBreedService";

class CreateBreedController{

    async handle(req: Request, res: Response){

        const createBreedService = new CreateBreedService();

        const {name} = req.body;
        try{
            const breed = await createBreedService.execute({
                name
            })

            return res.json(breed)
        }catch(err){
            console.log("Error: ", err);
            throw new Error("Houve um erro ao cadastrar a raça ! (controller)")
        }
    }
}

export {CreateBreedController};
