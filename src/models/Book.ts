import { Student } from './Student';
import { Course } from './Course';
import { Programme } from './Programme';
export class Book {
	public author: string;
	public course: Course;
	public courseId: number;
	public coverPhoto: string;
	public description: string;
	public id: number;
	public newPrice: number;
	public personalDescription: string;
	public price: number;
	public programme: Programme;
	public programmeId: number;
	public releaseYear: string;
	public pickupLocation?: string;
	public student: Student;
	public studentId: number;
	public title: string;

	constructor(data: any) {
		if (!data) return;
		this.author = data['author'];
		this.course = new Course(data['course']);
		this.courseId = data['course_id'];
		this.coverPhoto = data['cover_photo_url'];
		this.description = data['description'];
		this.id = data['id'];
		this.newPrice = data['new_price'];
		this.personalDescription = data['personal_description'];
		this.price = data['price'];
		this.programme = new Programme(data['programme']);
		this.programmeId = data['programme_id'];
		this.releaseYear = data['release_year'];
		this.pickupLocation = data['pickup_location'];
		this.student = new Student(data['student']);
		this.studentId = data['student_id'];
		this.title = data['title'];
	}
}
