import Api from "@/utils/Api";

export function login(data) {
    return Api.post(`/auth/login`, data);
}

export function register(data) {
    return Api.post(`/auth/register`, data);
}
