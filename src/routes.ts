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

router.post("/adicionarpet", AuthenticatedRoles(['admin', 'rewpoirweop']), upload.single('file'), new CreatePetController().handle)

// router.post("/adicionarraca", AuthenticatedAdmin, new CreateBreedController().handle);

// router.post("/adicionarespecie", AuthenticatedAdmin, new CreateSpeciesController().handle);

// router.post("/adicionarvacina", AuthenticatedAdmin, new CreateVaccineController().handle);

// router.post("/adicionardoenca", AuthenticatedAdmin, new CreateDiseaseController().handle);

// router.post("/adicionaralergia", AuthenticatedAdmin, new CreateAllergyController().handle);

// router.post("/petvaccine", AuthenticatedAdmin,AuthenticatedBasic, new AddVaccineToPetController().handle);

// router.post("/petdisease", AuthenticatedAdmin,AuthenticatedBasic, new AddDiseaseToPetController().handle)

// router.post("/petallergy", AuthenticatedAdmin,AuthenticatedBasic, new AddAllergyToPetController().handle);

// router.post("/agendar", AuthenticatedAdmin,AuthenticatedBasic, new CreateAppointmentController().handle);