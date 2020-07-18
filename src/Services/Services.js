//Registrar usuario
export const addUSer = (data) => {
    return fetch(process.env.REACT_APP_URL+'/api/addUser',{method:'POST', body:data}).then(data => data.json())
}

//loguear usuario
export const login = (data) => {
    return fetch(process.env.REACT_APP_URL+'/api/login',{method:'POST',body:data}).then(data => data.json())
}

//subir productos
export const addProduct = (data) => {
    return fetch(process.env.REACT_APP_URL+'/api/addProduct',{method:'POST',body:data, headers:{authorization: `BEARER ${localStorage.getItem('wallafullroken')}`}}).then(data => data.json()) 
}


//todos los productos por id usuario
export const getProductByIdUser = (data) => {
    return fetch(process.env.REACT_APP_URL+'/api/getProductByIdUser/'+data,{method:'GET'}).then(data => data.json())
}

//borrar producto
export const removeProductByIdProduct = (data) => {
    return fetch(process.env.REACT_APP_URL+'/api/removeProductByIdProduct/'+data,{method:'DELETE',headers:{authorization: `BEARER ${localStorage.getItem('wallafullroken')}`}}).then(data => data.json())
}

//actualizar imagenes i datos del usuario
export const updateUser = (id, data) => {
    return fetch(process.env.REACT_APP_URL+'/api/updateUser/'+id, {method:'PUT',body:data, headers:{authorization: `BEARER ${localStorage.getItem('wallafullroken')}`}}).then(data => data.json())
}
