export const getUsers = () =>{
        return fetch ('./users.json').then(res=>res.json())
}