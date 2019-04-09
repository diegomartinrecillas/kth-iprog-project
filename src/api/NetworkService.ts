import { RequestService } from './RequestService';
import { apiUrls } from './config';

export class NetworkService {
	public static getProgrammes() {
		const url = `${apiUrls.rundbok}/available/programmes`;
		return RequestService.getRequest(url);
	}
	public static getProgrammeByCode(code: string) {
		const url = `${apiUrls.rundbok}/programmes/${code}`;
		return RequestService.getRequest(url);
	}
	public static getCourses() {
		const url = `${apiUrls.rundbok}/available/courses`;
		return RequestService.getRequest(url);
	}
	public static getCourseByCode(code: string) {
		const url = `${apiUrls.rundbok}/courses/${code}`;
		return RequestService.getRequest(url);
	}
	public static searchListedBooks(query: string) {
		const url = `${apiUrls.rundbok}/books/search/${query}`;
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
