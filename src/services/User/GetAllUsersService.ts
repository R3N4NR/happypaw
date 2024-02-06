import prismaClient from "../../prisma/prismaClient";

class GetAllUsersService{
    async execute(){

        const users = await prismaClient.user.findMany();

        return users;
    }
}

export {GetAllUsersService};