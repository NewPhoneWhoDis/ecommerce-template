import './category-item.styles.scss';
import {useTranslationContext} from '../../context/TranslationContext';

const CategoryItem: React.FC<{category: Category}> = ({category}) => {
	const {translations} = useTranslationContext();

	return (
		<div className="category-container" key={category.id}>
			<div
				className="background-image"
				style={{backgroundImage: `url(${category.imageUrl})`}}
			></div>
			<div className="category-body-container">
				<h2>{category.title}</h2>
				<p>{translations.shopNow}</p>
			</div>
		</div>
	);
};

export default CategoryItem;
