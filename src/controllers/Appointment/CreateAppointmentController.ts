import { Request, Response } from "express";
import { CreateAppointmentService } from "../../services/Appointments/CreateAppointmentService";

class CreateAppointmentController{

    async handle(req:Request, res: Response){
        
        const {start_time, user_id, pet_id, end_time, status, type} = req.body;

        const createService = new CreateAppointmentService();

        const appointment = await createService.execute({start_time, user_id, pet_id, end_time, status, type});

        return res.json(appointment);
    }
}

export {CreateAppointmentController};