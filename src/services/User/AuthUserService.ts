import { compare } from "bcryptjs";
import prismaClient from "../../prisma/prismaClient";
import { sign } from "jsonwebtoken";
interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{

    async execute({email, password}:AuthRequest){
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error('E-mail ou senha incorretos')
        }

        const passwordMatch =await  compare(password, user.password)
        
        const roles = await prismaClient.userRole.findMany({
            where: {
                user_id: user.id
            }
        })

        const search = roles.map(role => {
            return role.role_id
        })
        

        const userRoles = await prismaClient.role.findMany({
            where: {
                id: {
                    in: search
                }
            },
            select: {
                title: true
            }
        });
    
            
        
        if(!passwordMatch){
            throw new Error("E-mail ou senha incorretos")
        }

        if (!userRoles || userRoles.length === 0) {
            throw new Error("Usuário não possui papéis associados");
        }
        
        const rolesTitles = await userRoles.map(role => role.title);

        
        const token = sign(
            {   
                
                name: user.name,
                email:user.email,
                roles: rolesTitles
                
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d',
            }
        )
        
        
        return{
            id: user.id,
            name: user.name,
            email: user.email,
            roles: rolesTitles,
            token: token,
        }
    }
    
}

export {AuthUserService};