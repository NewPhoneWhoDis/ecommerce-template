import {useState} from 'react';
import axios, {isAxiosError} from 'axios';
import {logError} from '../../util/errorHandlers';

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const useAuth = <T>() => {
	const [userData, setUserData] = useState<T | null>(null);
	const [errorMessage, setErrorMessage] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleAuth = async (endpoint: string, data: T) => {
		setUserData(data);
		setErrorMessage('');
		setIsSubmitting(true);

		try {
			const response = await axios.post(
				`${BASE_API_URL}/api/users/${endpoint}`,
				data
			);
			console.log(response.data.message);
			setIsSubmitting(false);
		} catch (error) {
			if (
				isAxiosError(error) &&
				error.response &&
				error.response.status === 400
			) {
				setErrorMessage(error.response.data.message);
			}
			logError(error);
			setErrorMessage('An error has occurred. Please try again later.');
			setIsSubmitting(false);
		}
	};

	return {
		userData,
		setUserData,
		errorMessage,
		handleAuth,
		isSubmitting,
	};
};

export default useAuth;
