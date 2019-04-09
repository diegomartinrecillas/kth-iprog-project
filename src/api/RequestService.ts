export class RequestService {
	public static async get(url: string) {
		const options = {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		};

		try {
			const res = await fetch(encodeURI(url), options);
			const jsonData = await res.json();
			return jsonData;
		} catch (err) {
			throw err;
		}
	}

	public static async post(url: string, data: any = {}) {
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		};

		try {
			const res = await fetch(encodeURI(url), options);
			const jsonData = await res.json();
			return jsonData;
		} catch (err) {
			throw err;
		}
	}
}
