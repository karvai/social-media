import Axios from "axios";

const instance = Axios.create(
	{
		baseURL: "https://social-network.samuraijs.com/api/1.0/",
		withCredentials: true,
		headers: { "API-KEY": "dd3b13dd-5cdc-4f85-858f-405932e6c96b" }
	}
)

export const usersAPI = {

	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},

	follow(userId) {
		return instance.post(`follow/${userId}`)
			.then(response => response.data)
	},

	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data)
	},

	getProfile(userId) {
		return instance.get(`profile/${!userId ? 2 : userId}`)
			.then(response => response.data)
	},

}