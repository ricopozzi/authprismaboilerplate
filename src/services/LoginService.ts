import { prismaClient } from '../prisma/index'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

class LoginService {
    async execute( email:string, password:string) {
        //usuario existe
        const user = await prismaClient.user.findUnique({
            where:  {
                email: email
            }
        })
        if(!user){
            throw new Error("Email or password incorrect")
        }
        //senha correta
        const passwordMatch =  await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email or password incorrect")
        }

        //gerar token
        const token =  sign({}, 'e897e9c50df448f6de3c0d523817c959', {
            subject: user.id,
            expiresIn: "1d"
        } )

        const tokenResponse = {
            token,
            user: { name: user.name, email: user.email}
        }

        return { tokenResponse }


    }
 }

export { LoginService }