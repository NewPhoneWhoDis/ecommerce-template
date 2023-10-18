type TranslationContextType = {
	translations: {[key: string]: string};
	updateTranslations: (newTranslations: {[key: string]: string}) => void;
};
