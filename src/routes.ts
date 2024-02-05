import { Router } from "express";
import uploadConfig from "./config/multer";
import multer from "multer";
import { CreateUserController } from "./controllers/User/CreateUserController";
import Authenticated from "./middlewares/Authenticated";
import { AuthUserController } from "./controllers/User/AuthUserController";
import { CreatePetController } from "./controllers/Pet/CreatePetController";
import { CreateBreedController } from "./controllers/Breed/CreateBreedController";
import { CreateSpeciesController } from "./controllers/Species/CreateSpeciesController";
import { CreateVaccineController } from "./controllers/Vaccine/CreateVaccineController";
import { AddVaccineToPetController } from "./controllers/PetVaccine/AddVaccineToPetController";
import { CreateDiseaseController } from "./controllers/Disease/CreateDiseaseController";
import { CreateAllergyController } from "./controllers/Allergy/CreateAllergyController";
import { AddDiseaseToPetController } from "./controllers/PetDisease/AddDiseaseToPetController";
import { AddAllergyToPetController } from "./controllers/PetAllergy/AddAllergyToPetController";
import { CreateAppointmentController } from "./controllers/Appointment/CreateAppointmentController";
export const router = Router();

const upload = multer(uploadConfig.upload(("./tmp")));

router.post("/criarconta", upload.single('file'), new CreateUserController().handle)


router.post("/login", new AuthUserController().handle )

router.post("/adicionarpet", Authenticated, upload.single('file'), new CreatePetController().handle)

router.post("/adicionarraca", Authenticated, new CreateBreedController().handle);

router.post("/adicionarespecie", Authenticated, new CreateSpeciesController().handle);

router.post("/adicionarvacina", Authenticated, new CreateVaccineController().handle);

router.post("/adicionardoenca", Authenticated, new CreateDiseaseController().handle);

router.post("/adicionaralergia", Authenticated, new CreateAllergyController().handle);

router.post("/petvaccine", Authenticated, new AddVaccineToPetController().handle);

router.post("/petdisease", Authenticated, new AddDiseaseToPetController().handle)

router.post("/petallergy", Authenticated, new AddAllergyToPetController().handle);

router.post("/agendar", Authenticated, new CreateAppointmentController().handle);