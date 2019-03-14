class RequestService {
	static async getRequest(url) {
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
			.catch(err => {
				console.log('Error: ', err);
			});
		return data;
	}
}
export default RequestService;
