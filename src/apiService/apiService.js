import instance from "./instance";

export const tableAPI = {
	getData : (count = 20) => {
		return instance.get(`?count=${count}`)
			.then(response => {
				return response.data;
			});
	}
};