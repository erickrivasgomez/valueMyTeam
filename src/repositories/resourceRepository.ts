import {Resource} from '../database/models/Resource'


const findAll = async () => {
    return await Resource.findAll()
}
export default {
    findAll
}