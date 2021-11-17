import { prismaClient } from '../prisma'

interface argTypes {
 adress: string
 rooms: string
 suite : string
 bathrooms: string
 maxpeople: string
}

class CreateMobService {
    async execute({ adress, rooms, suite, bathrooms, maxpeople }:argTypes){

        try {
            const createMob = await prismaClient.mob.create({
                data: {
                    adress,
                    rooms,
                    suite,
                    bathrooms,
                    maxpeople
                }
            })

            return createMob
        } catch (error) {
            return console.log(error)
        }
    }
}

export { CreateMobService }