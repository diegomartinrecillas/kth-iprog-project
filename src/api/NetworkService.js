import RequestService from './RequestService';
import { apiUrls } from '../config';

class NetworkService {
	static getProgrammes() {
		const url = `${apiUrls.kth}?call=programme`;
		return RequestService.getRequest(url);
	}
	static getProgrammeByCode(code) {
		const url = `${apiUrls.kth}?call=programme&code=${code}`;
		return RequestService.getRequest(url);
	}
	static getCourses() {
		const url = `${apiUrls.kth}?call=courses`;
		return RequestService.getRequest(url);
	}
	static getCourseByCode(code) {
		const url = `${apiUrls.kth}?call=course&code=${code}`;
		return RequestService.getRequest(url);
	}
	static searchForBooks(query) {
		const url = `${apiUrls.googleBooks}?q=${query}`;
		return RequestService.getRequest(url);
	}
	static getBookById(id) {
		const url = `${apiUrls.googleBooks}/${id}`;
		return RequestService.getRequest(url);
	}
}

export default NetworkService;
