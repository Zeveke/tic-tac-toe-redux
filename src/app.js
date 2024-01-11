import { useState } from 'react';
import { AppLayout } from './app-layout';
import { store } from './store';

export const App = () => {
	const [appState, setAppState] = useState(false);

	store.subscribe = () => setAppState(!appState);

	return <AppLayout />;
};
