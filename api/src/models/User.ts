import mongoose, {Document, Schema} from 'mongoose';

interface IUser extends Document {
	firstName?: string;
	lastName?: string;
	username: string;
	email: string;
	password: string;
	role: 'user' | 'admin';
}

const userSchema = new Schema<IUser>({
	firstName: {type: String},
	lastName: {type: String},
	username: {type: String, required: true, unique: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	role: {
		type: String,
		required: true,
		default: 'user',
		enum: ['user', 'admin'],
	},
});

const user = mongoose.model<IUser>('User', userSchema);

export default user;
