import { RequestService } from './RequestService';
import { apiUrls } from './config';

export class NetworkService {
	public static getProgrammes() {
		const url = `${apiUrls.rundbok}?call=programme`;
		return RequestService.getRequest(url);
	}
	public static getProgrammeByCode(code: string) {
		const url = `${apiUrls.rundbok}?call=programme&code=${code}`;
		return RequestService.getRequest(url);
	}
	public static getCourses() {
		const url = `${apiUrls.rundbok}?call=courses`;
		return RequestService.getRequest(url);
	}
	public static getCourseByCode(code: string) {
		const url = `${apiUrls.rundbok}?call=course&code=${code}`;
		return RequestService.getRequest(url);
	}
	public static searchListedBooks(query: string) {
		const url = `${apiUrls.rundbok}/api/books/search/${query}`;
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
