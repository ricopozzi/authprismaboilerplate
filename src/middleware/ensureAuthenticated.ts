import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { prismaClient } from '../prisma'

//Bearer s3213213ygt12g3y213 estrutura de bearer token PADRÃO

export async function ensureAuthenticated( request: Request, response: Response, next: NextFunction ) {
    const authToken = request.headers.authorization

    if( !authToken ) {
        return response.status(401).json({
            errorCode: "invalid token"
        })
    }

    const [, token] = authToken.split(" ")

    try{

       const { sub} = verify(token, 'e897e9c50df448f6de3c0d523817c959')
       const user = await prismaClient.user.findUnique({
           where:{ 
            //@ts-ignore
               id: sub
           }
       })

       if(!user){
           throw new Error("User does not exists")
       }

       next()

    } catch(error){
        return response.json(error)
    }
    
}