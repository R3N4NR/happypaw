export interface AppointmentProps{
    start_time: Date;
    end_time: Date;
    status: boolean;
    type: string; //criar tabela de tipo de agendamento com id, title
}