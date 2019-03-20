export class RequestService {
	public static async getRequest(url: string) {
		const options = {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		};

		const data = await await fetch(url, options)
			.then(res => {
				return res.json();
			})
			.catch(err => err);
		return data;
	}
}
