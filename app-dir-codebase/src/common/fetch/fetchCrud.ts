type ApiError<T> = {
    success: boolean
    message: string
    data?: T
}

type TFetchCrud = {
    url: string
    token?: string
    cacheName?: string
}

type TFetchAction<T> = {
    data?: T
} & TFetchCrud

export type TError<T> = Partial<T> & ApiError<T>

const { signal } = new AbortController()
class Fetch {
    private readonly BASE_URL: string
    constructor(baseUrl?: string) {
        this.BASE_URL = baseUrl ?? process.env.NEXT_BACKEND_URL!
    }

    private async handleResponse<T>(response: Response): Promise<TRes<T> | TError<T>> {
        if (!response.ok) {
            const errorData: TError<T> = await response.json()
            console.log(errorData.message || 'ямар нэгэн алдаа гарлаа')
            // throw new Error(errorData.message || 'ямар нэгэн алдаа гарлаа')
            return errorData
        }
        const responseData: TRes<T> = await response.json()
        return responseData
    }

    public async calcHeaders({ token, cacheName }: Partial<TFetchCrud>) {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        token && headers.append('Authorization', `Bearer ${token}`)
        if (cacheName) {
            const next: any = {
                tags: [`${cacheName}`],
            }
            headers.append('next', next)
        }
        headers.append('cache', 'force-cache')

        return headers
    }

    public async get<T>({ url, token, cacheName }: TFetchCrud): Promise<TRes<T> | TError<T>> {
        const headers = await this.calcHeaders({ token, cacheName })
        const response = await fetch(this.BASE_URL + url, {
            method: 'GET',
            headers,
            signal,
        })

        const a = await this.handleResponse<T>(response)

        console.log('res', a)
        return a
    }

    public async post<T>({ url, data, token, cacheName }: TFetchAction<T>): Promise<TRes<T> | TError<T>> {
        const headers = await this.calcHeaders({ token, cacheName })
        const response = await fetch(this.BASE_URL + url, {
            method: 'POST',
            headers,
            body: JSON.stringify(data),
            signal,
        })
        return await this.handleResponse<T>(response)
    }

    public async put<T>({ url, data, token }: TFetchAction<T>): Promise<TRes<T> | TError<T>> {
        const headers = await this.calcHeaders({ token })
        const response = await fetch(`${this.BASE_URL}${url}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(data),
            signal,
        })
        return await this.handleResponse<T>(response)
    }

    public async delete<T>({ url, token, cacheName }: TFetchAction<T>): Promise<TRes<T> | TError<T>> {
        const headers = await this.calcHeaders({ token, cacheName })
        const response = await fetch(`${this.BASE_URL}${url}`, {
            method: 'DELETE',
            headers,
            signal,
        })
        return await this.handleResponse<T>(response)
    }
}

export const fetchApi = new Fetch()
