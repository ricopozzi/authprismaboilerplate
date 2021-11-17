import { Request, Response } from 'express'
import { LoginService } from '../services/LoginService'

class LoginController {
    async handle( request: Request, response: Response ){
        const { email, password } = request.body

        const service = new LoginService()
        const result = await service.execute(email, password)

        return response.json(result)

    }
}

export { LoginController }