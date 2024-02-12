import http from "./httpService";

export function getCatgoryList() {
    return http.get('/category/list').then(({ data }) => data.data)
}