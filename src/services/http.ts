type QueryParams = {
    [key: string]: string | number;
};

type Body = {
    [key: string]: string | number | boolean;
};

const baseUrl = `${process.env.NEXT_PUBLIC_API_HOST}`

const api = async (resource: string, method: string = 'GET', queryParams?: QueryParams, body?: Body) => {

    let query = ''

    if (queryParams) {
        query = `${Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&')}`        
    }

    const url = `${baseUrl}/${resource}/?${query}`;    
    const token = localStorage.getItem('token')

    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Token ${token}`
    } as HeadersInit;

    return fetch(`${url}`, {
        method,
        headers: headers,
        body: body ? JSON.stringify(body) : undefined
    })
        .then(response => {
            if (response.status === 401 || response.status === 403) {
                localStorage.clear();
                window.location.href = '/auth/login';
            }
            return response.json()
        })
        .catch(err => {
            console.log(err);
        });
}


export const http = {
    get: async (resource: string, query?: any) => api(`${resource}`, 'GET', query),
    post: async (resource: string, body?: any) => api(`${resource}`, 'POST', undefined, body),
    put: async (resource: string, body?: any) => api(`${resource}`, 'PUT', undefined, body),
    delete: async (resource: string) => api(`${resource}`, 'DELETE')
}