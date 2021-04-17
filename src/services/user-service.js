const USERS_URL = "http://localhost:4000/api/users"

export const findAllUsers = () =>
    fetch(`${USERS_URL}`)
        .then(response => response.json())

const profile = () => {
    return fetch(`${USERS_URL}/profile`,{
        method: "POST",
        credentials: "include"
    }).then(response => response.json())
}

const register = (credentials) => {
    return fetch(`${USERS_URL}/register`,{
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const login = (credentials) => {
    return fetch(`${USERS_URL}/login`,{
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const logout = () => {}

export default {
    findAllUsers,
    register,
    login,
    logout,
    profile
}