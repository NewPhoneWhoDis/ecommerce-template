import React, {createContext, useContext, useState, ReactNode} from 'react';

type TranslationProviderProps = {
	children: ReactNode;
};

const TranslationContext = createContext<TranslationContextType | undefined>(
	undefined
);

export const useTranslationContext = () => {
	const context = useContext(TranslationContext);
	if (!context) {
		throw new Error(
			'useTranslationContext must be used within a TranslationProvider'
		);
	}
	return context;
};

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
	children,
}) => {
	const [translations, setTranslations] = useState<{[key: string]: string}>({
		categoryName: 'Category Name',
		shopNow: 'Shop Now',
	});

	const updateTranslations = (newTranslations: {[key: string]: string}) => {
		setTranslations({...translations, ...newTranslations});
	};

	return (
		<TranslationContext.Provider value={{translations, updateTranslations}}>
			{children}
		</TranslationContext.Provider>
	);
};
