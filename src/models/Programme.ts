import { Course } from './Course';

export class Programme {
	public id: number;
	public name: string;
	public createdAt: string;
	public updatedAt: string;
	public courses: Course[];

	constructor(data: any) {
		this.id = data['id'];
		this.name = data['name'];
		this.createdAt = data['created_at'];
		this.updatedAt = data['updated_at'];
		this.courses = data['courses'];
	}
}
