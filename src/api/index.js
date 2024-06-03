

const API_BASE = 'https://randomuser.me/api/';

const API_BASE_FACE='https://fakestoreapi.com/products/'


export const getUsers = ({results=10, page=1}) => {
    return fetch(`${API_BASE}?page=${page}&results=${results}&seed=abc`)
        .then((responce) =>
            responce.json());
  
}


export const getProducts = ({results=10, page=1}) => {
    return fetch(`${API_BASE_FACE}?page=${page}&results=${results}`)
        .then((responce) =>
            responce.json());
  
}