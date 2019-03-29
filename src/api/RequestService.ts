export class RequestService {
	public static async getRequest(url: string) {
		const options = {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		};

		try {
			const res = await fetch(encodeURI(url), options);
			const data = await res.json();
			return data;
		} catch (err) {
			throw err;
		}
	}
}
