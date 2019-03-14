import RequestService from './RequestService';
import { config } from '../config';

class NetworkService {
	static getProgrammes() {
		const url = `${config.apiUrl}/kopps/v2/programme/`;
		return RequestService.getRequest(url);
	}
	static getProgrammeByCode(code) {
		const url = `${config.apiUrl}/kopps/v2/programme/CDEPR/${code}/`;
		return RequestService.getRequest(url);
	}
	static getCourses() {
		const url = `${config.apiUrl}/kopps/v2/courses/`;
		return RequestService.getRequest(url);
	}
	static getCourseByCode(code) {
		const url = `${config.apiUrl}/kopps/v2/course/${code}/`;
		return RequestService.getRequest(url);
	}
}

export default NetworkService;
