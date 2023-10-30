import mongoose, {Document, Schema} from 'mongoose';
import bcrypt from 'bcryptjs';
interface IUser extends Document {
	firstName?: string;
	lastName?: string;
	username: string;
	email: string;
	password: string;
	role: 'user' | 'admin';
	matchPassword(enteredPassword: string): Promise<boolean>;
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

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		return next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	return next();
});

userSchema.methods.matchPassword = async function (enteredPassword: string) {
	return bcrypt.compare(this.password, enteredPassword);
};

const user = mongoose.model<IUser>('User', userSchema);

export default user;
