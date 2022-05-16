import Api from "@/utils/Api";

export function getDataset() {
    return Api.get(`/dataset`);
}

