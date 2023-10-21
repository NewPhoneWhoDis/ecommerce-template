import mongoose, {Document, Schema} from 'mongoose';

interface ICategory extends Document {
	name: string;
}

const categorySchema = new Schema<ICategory>({
	name: {type: String, required: true},
});

const category = mongoose.model<ICategory>('Category', categorySchema);

export default category;
