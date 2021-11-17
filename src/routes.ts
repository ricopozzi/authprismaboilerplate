import { response, Router } from 'express'
import { CreateMobController } from './controllers/CreateMobController'
import { CreateUserController } from './controllers/CreateUserController'
import { LoginController } from './controllers/LoginController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'

const routes = Router()

routes.post('/createuser', new CreateUserController().handle)
routes.post('/login', new LoginController().handle)
routes.post('/createmob', ensureAuthenticated,new CreateMobController().handle)
routes.use('/authtest', ensureAuthenticated ,async (req, res)=> {
    res.json({
        auth: "OK"
    })
})

export { routes }