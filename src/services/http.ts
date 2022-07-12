import { APIQuery, defaultQuery } from '../models/api';

type Body = {
    [key: string]: string | number | boolean;
};

const buildParams = (query: APIQuery = defaultQuery): string => {
    const { params } = query
    let res: string = ''
    if (params) {
        res = `${Object.keys(params).map(key => `${key}=${params[`${key}`]}`).join('&')}`
    }
    return ''
}

const baseUrl = `${process.env.NEXT_PUBLIC_API_HOST}`

const api = async (resource: string, method: string = 'GET', query?: APIQuery, body?: Body) => {

    const queryParams = buildParams(query)
    const url = `${baseUrl}/${resource}/?${queryParams}`;
    const token = localStorage.getItem('token')

    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Token ${token}`
    } as HeadersInit;

    const reponse = await fetch(`${url}`, {
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

    return reponse
}


export const http = {
    get: async (resource: string, query?: APIQuery) => api(`${resource}`, 'GET', query),
    post: async (resource: string, body?: any) => api(`${resource}`, 'POST', undefined, body),
    put: async (resource: string, body?: any) => api(`${resource}`, 'PUT', undefined, body),
    delete: async (resource: string) => api(`${resource}`, 'DELETE')
}