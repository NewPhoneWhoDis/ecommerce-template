import CategoryItem from '../category-item/CategoryItem.component';
import './directory.styles.scss';

interface DirectoryProps {
	categories: Category[];
}

const Directory: React.FC<DirectoryProps> = ({categories}) => {
	return (
		<div className="directory-container">
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category}></CategoryItem>
			))}
		</div>
	);
};

export default Directory;
