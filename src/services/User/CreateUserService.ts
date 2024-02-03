import { hash } from "bcryptjs";
import { UserProps } from "../../models/interfaces/UserProps";
import prismaClient  from "../../prisma/prismaClient";

class CreateUserService{

    async execute({name,email, password,picture,points,surname,telephone}: UserProps){

        const passwordHash = await hash(password, 8)
        
        const alreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email,
            }
        })

        if(alreadyExists){
            throw new Error("There's a user with this e-mail.")
        }

        if(email === '' || password === ''){
            throw new Error("All fields must be filled.")
        }

        if(!points){
            points = 0;
        }
        try{
        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash,
                picture: picture,
                points: points,
                surname: surname,
                telephone: telephone,
            },
           select:{
            id:true,
            name:true,
            surname: true,        
            email: true,
            password: true,
            picture: true,
            points: true,
            telephone: true,
            created_at: true,
            updated_at: true,  
           }
        })

        return user;
    }catch(err){
        console.log('Error: ', err)
        throw new Error('There was an error creating the user.')
    }
    }
}

export {CreateUserService};