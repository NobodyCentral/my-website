import { useRouter } from 'next/router';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}
