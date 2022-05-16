import Api from "@/utils/Api";

export function getBuyOrders() {
    return Api.get(`/buy-order`);
}

export function createBuyOrder(payload) {
    return Api.post(`/buy-order`, payload);
}

export function updateBuyOrder(id, payload) {
    return Api.patch(`/buy-order/${id}`, payload);
}

export function deleteBuyOrder(id) {
    return Api.delete(`/buy-order/${id}`);
}
