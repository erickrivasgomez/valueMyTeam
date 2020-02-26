import questionRepository from '../repositories/questionRepository'
import { Router } from 'express'

export const questionController = Router()

questionController.get('/', async (req, res) => {
    
    const question = await questionRepository.findAll()
    if (question) {
        res.status(200).json({ message: 'OK', question })
    } else {
        res.status(400).json({ err : 'Bad Request'})
    }
})  