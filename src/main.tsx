import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import {TranslationProvider} from './context/TranslationContext.tsx';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<TranslationProvider>
				<App />
			</TranslationProvider>
		</BrowserRouter>
	</React.StrictMode>
);
