import { hash } from "bcryptjs";
import { UserProps } from "../../models/interfaces/UserProps";
import prismaClient from "../../prisma/prismaClient";

class UpdateUserService {
    async execute({id, name, email, password, roles, picture, points, surname, telephone}: UserProps) {
        // Verifica se o usuário existe
        const existingUser = await prismaClient.user.findUnique({
            where: {
                id: id
            }
        });

        if (!existingUser) {
            throw new Error("User not found.");
        }

        // Verifica se o e-mail já está sendo usado por outro usuário
        if (email && email !== existingUser.email) {
            const userWithEmail = await prismaClient.user.findFirst({
                where: {
                    email: email
                }
            });

            if (userWithEmail) {
                throw new Error("There's already a user with this email.");
            }
        }

        // Atualiza o usuário
        const userData: any = {
            name: name,
            email: email,
            // Hash password if provided
            password: password ? await hash(password, 8) : undefined,
            picture: picture,
            points: points,
            surname: surname,
            telephone: telephone
        };

        // Remove as chaves com valores undefined para evitar que o Prisma tente definir esses campos como nulos no banco de dados
        Object.keys(userData).forEach(key => userData[key] === undefined && delete userData[key]);

        const updatedUser = await prismaClient.user.update({
            where: {
                id: id
            },
            data: userData
        });

        return updatedUser;
    }
}

export { UpdateUserService };