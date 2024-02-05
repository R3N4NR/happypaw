import prismaClient from "../../prisma/prismaClient";
import { AppointmentProps } from "../../models/interfaces/AppointmentProps";
import { createError } from "../../utils/errors/createError";

class CreateAppointmentService {

    async execute({start_time,user_id, pet_id, end_time,status,type}: AppointmentProps){

        try{
            const appointment = await prismaClient.appointment.create({
                data:{
                    start_time: start_time,
                    pet_id: pet_id,
                    user_id: user_id,
                    end_time: end_time,
                    status: status,
                    type: type
                },
                select: {
                    start_time: true,
                    end_time: true,
                    user_id: true,
                    pet_id: true,
                    status: true,
                    type: true
                }
            })

            return appointment
        }catch(err){
            createError(err, "appointment");
        }
    }
}

export {CreateAppointmentService};