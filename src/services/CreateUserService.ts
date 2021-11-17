
import { prismaClient } from '../prisma'
import { hash } from 'bcrypt'

class CreateUserService {
    async execute(email: string, password: string, name: string) {
        const passwordHash = await hash(password, 8)

        try {
            const createUser = await prismaClient.user.create({
            
                data:{
                    email,
                    password: passwordHash,
                    name
                }
                
            })
    
            return createUser
        } catch (error) {
            return error
        }
            
    }
}

export { CreateUserService }