import {API} from "../../backend";

export const getProducts = () => {
    return fetch(`${API}/products`, {
        method: "GET"
    })
    .then(respone => {
        return respone.json()
    })
    .catch(err => console.log(err))
}

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        mathod: "GET"
    })
    .then(respone => {
        return respone.json()
    })
    .catch(err => console.log(err))
}
