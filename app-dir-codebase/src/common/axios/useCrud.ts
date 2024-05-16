import axios from './http'
import { TNoobRes, httpErrorHandler } from './axios.service'

export function useCrud() {
    // const token = typeof window !== 'undefined' && getToken()

    async function getData<T>(restUrl: string): Promise<TNoobRes<T>> {
        try {
            const response: any = await axios({
                method: 'get',
                url: restUrl,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            })
            return response.data
        } catch (e: any) {
            return httpErrorHandler<T>(e)
        }
    }

    async function postData<T>(restUrl: string, data: unknown, isFormData: boolean = false): Promise<TNoobRes<T>> {
        try {
            const response: any = await axios({
                method: 'post',
                data,
                url: restUrl,
                withCredentials: true,
                headers: {
                    'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
                    'Access-Control-Allow-Credentials': true,
                },
            })
            return response.data
        } catch (e: any) {
            const error = httpErrorHandler(e)
            console.log('error', error)
            throw e
        }
    }

    async function putData<T>(restUrl: string, editedModel: T, isFormData: boolean = false): Promise<TNoobRes<T>> {
        try {
            const response: any = await axios({
                method: 'put',
                data: editedModel,
                url: restUrl,
                headers: {
                    'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
                },
            })
            return response.data
        } catch (e: any) {
            return httpErrorHandler<T>(e)
        }
    }

    function deleteData(restUrl: string) {
        return axios({
            method: 'delete',
            url: restUrl,
        })
    }

    return { getData, postData, putData, deleteData }
}
