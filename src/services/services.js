import Axios from 'axios';
import api from './api'

export function dataServiceGet(req) {
    return new Promise((resolve, reject) => {
        Axios.get(api.defaults.baseURL + req.uri, req.data, req.headers ? { headers: req.headers } : {})
            .then((response) => {
                //  console.log(response.data)
                if (response.data?.errors) {
                    reject(response)
                } else {
                    resolve(response.data)
                }

            }).catch((error) => {
                //  console.log(error.response.data)
                reject(error.data.errors)

            })
    })

}

export function dataServicePost(req) {

    return new Promise((resolve, reject) => {
        Axios.post(api.defaults.baseURL + req.uri, req.data, req.headers ? { headers: req.headers } : {})
            .then((response) => {

                resolve(response)


            }).catch((error) => {
                console.log("eeeeeroooor", error.message)
                reject(error.response?.errors)
            })
    })

}