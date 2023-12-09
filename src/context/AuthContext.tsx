import React, {createContext, useContext, useEffect} from 'react';
import axios from 'axios';
import {BehaviorSubject} from 'rxjs';
import {User} from '../models/User';

interface LoginCredentials {
	login: string;
	password: string;
}

interface AuthContextType {
	currentUser$: BehaviorSubject<User | null>;
	login: (credentials: LoginCredentials) => Promise<void>;
	register: (userData: {
		username: string;
		email: string;
		password: string;
	}) => Promise<void>;
	logout: () => Promise<void>;
	refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuthContext must be used within an AuthProvider');
	}
	return context;
};

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
	children,
}) => {
	const currentUser$ = new BehaviorSubject<User | null>(null);

	useEffect(() => {
		const checkUserLoggedIn = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_BASE_API_URL}/api/users/currentUser`,
					{withCredentials: true}
				);
				currentUser$.next(response.data.user);
			} catch (error) {
				console.error('Error fetching current user:', error);
				currentUser$.next(null);
			}
		};

		checkUserLoggedIn();
	}, []);

	const login = async (credentials: LoginCredentials): Promise<void> => {
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_BASE_API_URL}/api/users/login`,
				credentials,
				{withCredentials: true}
			);
			currentUser$.next(response.data.user);
		} catch (error) {
			console.error('Login error:', error);
			currentUser$.next(null);
		}
	};

	const register = async (userData: {
		username: string;
		email: string;
		password: string;
	}): Promise<void> => {
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_BASE_API_URL}/api/users/register`,
				userData,
				{withCredentials: true}
			);
			currentUser$.next(response.data.user);
		} catch (error) {
			console.error('Registration error:', error);
		}
	};

	const logout = async (): Promise<void> => {
		try {
			await axios.post(
				`${import.meta.env.VITE_BASE_API_URL}/api/users/logout`,
				{},
				{withCredentials: true}
			);
			currentUser$.next(null);
		} catch (error) {
			console.error('Logout error:', error);
		}
	};

	const refreshToken = async (): Promise<void> => {
		try {
			const response = await axios.get(
				`${import.meta.env.VITE_BASE_API_URL}/api/users/refreshToken`,
				{withCredentials: true}
			);
			currentUser$.next(response.data.user);
		} catch (error) {
			console.error('Error refreshing token:', error);
		}
	};

	return (
		<AuthContext.Provider
			value={{currentUser$, login, register, logout, refreshToken}}
		>
			{children}
		</AuthContext.Provider>
	);
};
