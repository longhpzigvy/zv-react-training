import { getAsync } from "../utils/http-clients"

const COUNTRY_URL = "all"

export const getAllCountryAsync = () => {
    return getAsync(COUNTRY_URL)
}

export const getCountryByNameAsync = (name) => {
    const url = `name/${name}`
    return getAsync(url)
}