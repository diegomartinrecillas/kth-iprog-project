export class User {
	public pictureUrl: string;
	public uuid: string;
	public username: string;
	public token: string;

	constructor(data: any) {
		if (!data) return;
		this.pictureUrl = data['picture_url'];
		this.uuid = data['uuid'];
		this.username = data['username'];
		this.token = data['token'];
	}
}
