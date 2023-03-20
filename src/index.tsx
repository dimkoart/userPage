import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { QueryClient } from 'react-query'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
)
