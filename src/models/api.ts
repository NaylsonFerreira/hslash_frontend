export interface APIResponse {
    count?: number
    next?: string
    previous?: string
    results?: any[]
}

export interface APIQuery {
    params?: { [key: string]: string | number | boolean }[]
    paginator?: APIPaginator
}

export interface APIPaginator {
    page: number
    perPage: number
    order: string
    orderBy: string
}

export interface APIService {
    getList: (query?: APIQuery) => {}
    search: (query: string) => {}
}

export const defaultQuery: APIQuery = {
    paginator: {
        page: 1,
        perPage: 10,
        order: '',
        orderBy: 'id'
    },
    params: []
}