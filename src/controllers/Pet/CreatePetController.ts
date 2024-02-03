import { Request, Response } from "express";
import { CreatePetService } from "../../services/Pet/CreatePetService";

class CreatePetController {
    async handle(req: Request, res: Response) {
      const createPetService = new CreatePetService();
  
      const { name, age, color, breed_id, species_id } = req.body;
  
      try {
        if (!req.file) {
          throw new Error("Você precisa enviar uma imagem");
        } else {
          const { originalname, filename: picture } = req.file;
  
          // Converta user_id para o tipo apropriado (pode ser necessário ajustar conforme a necessidade)
          const user_id = req.body.user_id;
  
          const pet = await createPetService.execute({
            name,
            age,
            picture,
            color,
            user_id,
            breed_id,
            species_id,
          });
  
          return res.json(pet);
        }
      } catch (err) {
        console.log("Error: ", err);
        throw new Error("Houve um erro ao adicionar seu pet!");
      }
    }
  }
export {CreatePetController};