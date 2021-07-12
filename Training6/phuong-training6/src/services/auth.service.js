import {postAsync} from "../utils/http-clients"
const URL = "login"

export const loginAsync = (req) => {
    return postAsync(URL, req)
}