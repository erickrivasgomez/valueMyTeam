import { Question } from '../database/models/Question'

const findAll = async () => {
    return await Question.findAll()
}
export default {
    findAll
}