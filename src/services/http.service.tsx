import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL: string = `http://localhost:3000`;

export function httpGetRequest(endpoint: string) {
    return axios.get(`${BASE_URL}/${endpoint}`)
    .then((res) => {
        toast.success('Data has been fetched!');
        return res.data;
    })
    .catch((err) => {
        console.error('Error: ', err.message);
        toast.error(err.message);
    })
}