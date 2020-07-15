//Registrar usuario
export const addUSer = (data) => {
    return fetch(process.env.REACT_APP_URL+'/api/addUser',{method:'POST', body:data}).then(data => data.json())
}

//loguear usuario
export const login = (data) => {
    return fetch(process.env.REACT_APP_URL+'/api/login',{method:'POST',body:data}).then(data => data.json())
}
