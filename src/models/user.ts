export interface UserInterface {
	firstName: string;
	lastName: string;
	email: string;
}

export default class User implements UserInterface {
	constructor(
		public firstName: string,
		public lastName: string,
		public email: string,
	) {}

	// Method related to User logic
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}
