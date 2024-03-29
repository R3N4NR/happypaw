import { Role } from "@prisma/client";

export interface UserProps {
  id?: string;
  name: string;
  password: string;
  surname: string;
  points: number;
  roles: string[];
  telephone: string;
  email: string;
  picture: string;
  appointment_id?: string;
  pet_id?: string;
}
