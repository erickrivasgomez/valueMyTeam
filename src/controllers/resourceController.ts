import resourceRepository from '../repositories/resourceRepository'
import { Router } from 'express'

export const resourceController = Router()

resourceController.get('/', async (req, res) => {
    
    const resource = await resourceRepository.findAll()
    if (resource) {
        res.status(200).json({ resource })
    } else {
        res.status(400).json({ err : 'Bad Request'})
    }
})  

resourceController.get('/prices', async (req, res) => {
    
    const resource = await resourceRepository.getPrices()
    let response = []
    if (resource) {
        resource.forEach(element => {
            let resp = {
                "jr": element.resource_location_types[0].price,
                "mid": element.resource_location_types[1].price,
                "sr": element.resource_location_types[2].price,
                "tech": element.resource_location_types[3].price,
                "engMan": element.resource_location_types[4].price,
                "qa": element.resource_location_types[5].price,
            }
            response.push(resp)
        })
        res.status(200).json({ response })
    } else {
        res.status(400).json({ err : 'Bad Request'})
    }
})