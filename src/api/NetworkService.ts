import { RequestService } from './RequestService';
import { config } from './config';

export class NetworkService {
	public static getProgrammes() {
		const url = `${config.apiUrls.rundbok}/programmes`;
		return RequestService.get(url);
	}
	public static getAvailableProgrammes() {
		const url = `${config.apiUrls.rundbok}/available/programmes`;
		return RequestService.get(url);
	}
	public static getProgrammeByCode(code: string) {
		const url = `${config.apiUrls.rundbok}/programmes/${code}`;
		return RequestService.get(url);
	}
	public static getCourses() {
		const url = `${config.apiUrls.rundbok}/available/courses`;
		return RequestService.get(url);
	}
	public static getCourseByCode(code: string) {
		const url = `${config.apiUrls.rundbok}/courses/${code}`;
		return RequestService.get(url);
	}
	public static searchListedBooks(query: string) {
		const url = `${config.apiUrls.rundbok}/books/search/${query}`;
		return RequestService.get(url);
	}
	public static searchForBooks(query: string) {
		const url = `${config.apiUrls.googleBooks}?q=${query}`;
		return RequestService.get(url);
	}
	public static getBookById(id: string) {
		const url = `${config.apiUrls.googleBooks}/${id}`;
		return RequestService.get(url);
	}
}
