import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryCLient = new QueryClient()

createRoot(document.getElementById('root')).render(
	// <StrictMode>
	<QueryClientProvider client={queryCLient}>
		<App />
	</QueryClientProvider>
	// </StrictMode>
)
