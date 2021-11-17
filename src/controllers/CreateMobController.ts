import { Request, Response } from 'express'
import { CreateMobService } from '../services/CreateMobService'

class CreateMobController {
    async handle( request: Request, response: Response ){
        const { adress, rooms, bathrooms, suite, maxpeople } = request.body

        const service =  new CreateMobService()
        const result = await service.execute({adress, rooms, maxpeople, bathrooms, suite})

        return response.json(result)
    }
}

export { CreateMobController }