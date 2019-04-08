export class Book {
	public author: string;
	public courseId: number;
	public coverPhoto: string;
	public description: string;
	public id: number;
	public newPrice: number;
	public personalDescription: string;
	public price: number;
	public programmeId: number;
	public releaseYear: string;
	public studentId: number;
	public title: string;

	constructor(data: any) {
		this.author = data['author'];
		this.courseId = data['course_id'];
		this.coverPhoto = data['cover_photo'];
		this.description = data['description'];
		this.id = data['id'];
		this.newPrice = data['new_price'];
		this.personalDescription = data['personal_description'];
		this.price = data['price'];
		this.programmeId = data['programme_id'];
		this.releaseYear = data['release_year'];
		this.studentId = data['student_id'];
		this.title = data['title'];
	}
}
