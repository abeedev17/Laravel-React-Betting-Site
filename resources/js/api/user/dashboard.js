
import Config from '../../config' ;
import axios from '../service' ;
let api = {} ;
api.get_liver_result = (req) => {

    return axios({
        url: "/test",
        method:'post',
        type: 'json',
        data: req
    })
}

export default api ;