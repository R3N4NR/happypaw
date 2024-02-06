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
import { DeleteUserController } from "./controllers/User/DeleteUserController";
import { GetAllUsersController } from "./controllers/User/GetAllUsersController";
import { UpdateUserController } from "./controllers/User/UpdateUserController";
import { UserDetailController } from "./controllers/User/UserDetailService";

export const router = Router();

const upload = multer(uploadConfig.upload(("./tmp")));

//ROTAS POST
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

//ROTAS DELETE

router.delete("/deleteuser", AuthenticatedRoles(['admin', 'basic']), new DeleteUserController().handle)

//ROTAS GET

router.get("/listuser", AuthenticatedRoles(['admin']), new GetAllUsersController().handle)
router.get("/me", AuthenticatedRoles(['admin', 'basic', 'vet']), new UserDetailController().handle)

//ROTAS PUT

router.put("/updateuser", upload.single('file'), new UpdateUserController().handle)