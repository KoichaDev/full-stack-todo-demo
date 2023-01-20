import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const root = document.getElementById('root') as HTMLElement;

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>
);
