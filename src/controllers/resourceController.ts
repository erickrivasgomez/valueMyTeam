import resourceRepository from '../repositories/resourceRepository'
import { Router } from 'express'

export const resourceController = Router()

resourceController.get('/', async (req, res) => {
    
    const resource = await resourceRepository.findAll()
    if (resource) {
        res.status(200).json({ message: 'OK', resource })
    } else {
        res.status(400).json({ err : 'Bad Request'})
    }
})  