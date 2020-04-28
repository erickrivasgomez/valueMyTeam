import {Resource} from '../database/models/Resource'
import {Resource_location_type} from '../database/models/Resource_location_type'
import {Location_type} from '../database/models/Location_type'




const findAll = async () => {
    return await Resource.findAll()
}

const getPrices = async () => {
    return await Location_type.findAll({
        include: [{model: Resource_location_type}]
    })
}
export default {
    findAll, getPrices
}