import axios, {AxiosInstance} from "axios";

class ApiFactory{
    api: AxiosInstance | null = null

    init(){
        this.api = axios.create({
            baseURL: `http://localhost:3001`,
            headers: {
                'Accept': 'application/json',
            }
        })
        return this.api
    }
}

const api = new ApiFactory();

export async function getOrganization() {
    try {
        let response = await api.init().get('/api/animals')
        if (response.status === 200) {
            return response.data
        } else {
            return null
        }
    } catch (e) {
        console.log('/api/animals')
        console.log(e)
        return null
    }
}