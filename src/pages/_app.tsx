import AuthProvider from '@/providers/authProviders/autProvider'
import { TypeComponentAuthFields } from '@/providers/authProviders/types'
import { persistor, store } from '@/store/store'
import '../globals.css'
import 'tailwindcss/tailwind.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
export default function App({ Component, pageProps }: AppProps & TypeComponentAuthFields) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider Component={{
            isOnlyUser: Component.isOnlyUser,
            isAdmin: Component.isAdmin
          }}>
            <Component {...pageProps} />
          </AuthProvider>


        </PersistGate>
      </Provider>

    </QueryClientProvider>
  )
}