export class RequestService {
	public static async get(url: string, authorization?: string) {
		const options = {
			method: 'GET',
			headers: {
				authorization,
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

	public static async delete(url: string, authorization?: string) {
		const options = {
			method: 'DELETE',
			headers: {
				authorization,
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

	public static async post(
		url: string,
		data: any = {},
		authorization?: string,
		extraHeaders = {}
	) {
		const options = {
			method: 'POST',
			headers: {
				authorization,
				'content-type': 'application/json',
				...extraHeaders,
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
