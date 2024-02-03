declare namespace Express{
    export interface Request{
        user_id: string;
        breed_id: string;
        species_id: string;
        vaccine_id: string;
        pet_id: string;
    }
}