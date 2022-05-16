import Api from "@/utils/Api";

export function getBuyOrders() {
    return Api.get(`/buy-order/all`);
}

export function createBuyOrder(payload) {
    return Api.post(`/buy-order/create`, payload);
}

export function updateBuyOrder(id, payload) {
    return Api.put(`/buy-order/update/${id}`, payload);
}

export function deleteBuyOrder(id) {
    return Api.delete(`/buy-order/delete/${id}`);
}
