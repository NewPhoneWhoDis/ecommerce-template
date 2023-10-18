import {useTranslationContext} from './context/TranslationContext';

const categories = [
	{
		id: 1,
		title: 'Hats',
	},
	{
		id: 2,
		title: 'Clothes',
	},
	{
		id: 3,
		title: 'Sneakers',
	},
	{
		id: 3,
		title: 'Placeholder',
	},
];

const App = () => {
	const {translations} = useTranslationContext();

	return (
		<div className="categories-container">
			{categories.map(({title}) => (
				<div className="category-container">
					<div className="category-body-container">
						<h2>{title}</h2>
						<p>{translations.shopNow}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default App;
