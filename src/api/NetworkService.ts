import RequestService from './RequestService';
import { apiUrls } from './config';

class NetworkService {
	public static getProgrammes() {
		const url = `${apiUrls.kth}?call=programme`;
		return RequestService.getRequest(url);
	}
	public static getProgrammeByCode(code: string) {
		const url = `${apiUrls.kth}?call=programme&code=${code}`;
		return RequestService.getRequest(url);
	}
	public static getCourses() {
		const url = `${apiUrls.kth}?call=courses`;
		return RequestService.getRequest(url);
	}
	public static getCourseByCode(code: string) {
		const url = `${apiUrls.kth}?call=course&code=${code}`;
		return RequestService.getRequest(url);
	}
	public static searchForBooks(query: string) {
		const url = `${apiUrls.googleBooks}?q=${query}`;
		return RequestService.getRequest(url);
	}
	public static getBookById(id: string) {
		const url = `${apiUrls.googleBooks}/${id}`;
		return RequestService.getRequest(url);
	}
}

export default NetworkService;
