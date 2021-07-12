import { getAsync } from "../utils/http-clients"

const URL = "api/users"

export const getMyProfileAsync = () => {
    const url = URL + "/my"
    return getAsync(url)
}

export const getUsersAsync = () => {
    return getAsync(URL)
} 