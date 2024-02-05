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
        
        const role = Object.values(user.role)

        if(!passwordMatch){
            throw new Error("E-mail ou senha incorretos")
        }

        const token = sign(
            {   
                
                name: user.name,
                email:user.email,
                role: user.role
                
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
            role: user.role,
            token: token,
        }
    }
    
}

export {AuthUserService};