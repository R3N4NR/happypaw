import { Router } from "express";
import uploadConfig from "./config/multer";
import multer from "multer";
import { CreateUserController } from "./controllers/User/CreateUserController";
import Authenticated from "./middlewares/Authenticated";
import { AuthUserController } from "./controllers/User/AuthUserController";
import { CreatePetController } from "./controllers/Pet/CreatePetController";
import { CreateBreedController } from "./controllers/Breed/CreateBreedController";
import { CreateSpeciesController } from "./controllers/Species/CreateSpeciesController";
export const router = Router();

const upload = multer(uploadConfig.upload(("./tmp")));

router.post("/criarconta", upload.single('file'), new CreateUserController().handle)


router.post("/login", new AuthUserController().handle )

router.post("/adicionarpet", Authenticated, upload.single('file'), new CreatePetController().handle)

router.post("/adicionarraca", Authenticated, new CreateBreedController().handle);

router.post("/adicionarespecie", Authenticated, new CreateSpeciesController().handle);