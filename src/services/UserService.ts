import axios from "../helpers/setupAxios";

export async function getAllUsers() : Promise<object> {
    return (await axios.get(`/users`)).data;
};