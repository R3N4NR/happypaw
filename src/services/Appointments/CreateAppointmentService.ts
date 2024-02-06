import prismaClient from "../../prisma/prismaClient";
import { AppointmentProps } from "../../models/interfaces/AppointmentProps";
import { createError } from "../../utils/errors/createError";
import { APPOINTMENTTYPE } from "../../config/AppointmentType";
import {DateTime} from 'luxon'
class CreateAppointmentService {

    async execute({start_time,user_id, pet_id, end_time,status,type}: AppointmentProps){

        if(!(type in APPOINTMENTTYPE)){
            throw new Error("O tipo de agendamento informado não existe !")
        }
        
        try{
            const appointment = await prismaClient.appointment.create({
                data:{
                    start_time: new Date(start_time),
                    pet_id: pet_id,
                    user_id: user_id,
                    end_time: new Date(end_time),
                    status: status,
                    type: type.toLowerCase()
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