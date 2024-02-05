import http from "./httpService";

export function getProjrctsOwner({ data }) {
    return http.get('/project/owner-projects').then(({ data }) => data.data);
}
