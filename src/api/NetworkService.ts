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
		const url = `${config.apiUrls.rundbok}/books/search?query=${query}`;
		return RequestService.get(url);
	}
	public static getListedBookById(id: string) {
		const url = `${config.apiUrls.rundbok}/books/${id}`;
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
	public static postNewBook() {
		const url = `${config.apiUrls.rundbok}/student/book/create`;
		return url;
	}
	public static signIn(facebookToken: string) {
		const url = `${config.apiUrls.rundbok}/student/sign-in`;
		return RequestService.post(url, {
			facebook_token: facebookToken,
		});
	}
	public static signOut(rundbokToken: string) {
		const url = `${config.apiUrls.rundbok}/student/sign-out`;
		return RequestService.post(url, null, rundbokToken);
	}
}
