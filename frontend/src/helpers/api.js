import axios from "axios";

export function getAll(endpoint){
	return axios.get(endpoint)
}
export function getOne(endpoint, id){
	return axios.get(endpoint, id)
}

export function updateOne(endpoint, id){
	return axios.put(endpoint, id)
}

export function remove(endpoint, id){
	return axios.put(endpoint, id)
}

