
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const publicPages = ['/login'];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = typeof window !== 'undefined' && localStorage.getItem('loggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    setLoading(false);
    if (!loggedIn && !publicPages.includes(router.pathname)) {
      router.replace('/login');
    }
  }, [router.pathname]);

  if (loading) return null;
  if (!isLoggedIn && !publicPages.includes(router.pathname)) return null;
  return <Component {...pageProps} />;
}

