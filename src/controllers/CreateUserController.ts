import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'


class CreateUserController {
    async handle( request: Request, response: Response ){
        
        const { email, password, name } = request.body

        const service = new CreateUserService()
        const result =  await service.execute(email, password, name)
        
        return response.json(result)
    }
}

export { CreateUserController }