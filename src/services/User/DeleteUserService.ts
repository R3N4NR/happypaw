import prismaClient from "../../prisma/prismaClient";


 class DeleteUserService{
    async execute(user_id: string){

        const deleteUser = await prismaClient.user.delete({
            where:{
                id: user_id,
            }
        })

        return deleteUser;
    }
}

export {DeleteUserService};