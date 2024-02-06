import { Router } from "express";
import uploadConfig from "./config/multer";
import multer from "multer";
import { CreateUserController } from "./controllers/User/CreateUserController";
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
import AuthenticatedRoles from './middlewares/AuthenticatedRoles';

export const router = Router();

const upload = multer(uploadConfig.upload(("./tmp")));

router.post("/criarconta", upload.single('file'), new CreateUserController().handle)

router.post("/login", new AuthUserController().handle )

router.post("/adicionarpet", AuthenticatedRoles(['admin', 'basic']), upload.single('file'), new CreatePetController().handle)

router.post("/adicionarraca", AuthenticatedRoles(['admin']), new CreateBreedController().handle);

router.post("/adicionarespecie", AuthenticatedRoles(['admin']), new CreateSpeciesController().handle);

router.post("/adicionarvacina", AuthenticatedRoles(['admin']), new CreateVaccineController().handle);

router.post("/adicionardoenca", AuthenticatedRoles(['admin']), new CreateDiseaseController().handle);

router.post("/adicionaralergia", AuthenticatedRoles(['admin']), new CreateAllergyController().handle);

router.post("/petvaccine", AuthenticatedRoles(['admin', 'basic']), new AddVaccineToPetController().handle);

router.post("/petdisease", AuthenticatedRoles(['admin', 'basic']), new AddDiseaseToPetController().handle)

router.post("/petallergy", AuthenticatedRoles(['admin', 'basic']), new AddAllergyToPetController().handle);

router.post("/agendar", AuthenticatedRoles(['admin', 'basic']), new CreateAppointmentController().handle);