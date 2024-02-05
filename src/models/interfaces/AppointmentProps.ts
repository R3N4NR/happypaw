export interface AppointmentProps{
    start_time: Date;
    end_time: Date;
    status: boolean;
    user_id: string;
    pet_id: string
    type: string; //criar tabela de tipo de agendamento com id, title
}