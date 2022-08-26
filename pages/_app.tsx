import { useState } from 'react';
import { Router } from 'next/router';
import type { AppProps } from 'next/app';

import PageLoader from '@components/PageLoader';
import ErrorBoundary from '@components/ErrorBoundary';

import '../styles/index.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [loading, setLoading] = useState<boolean>(false);

    Router.events.on('routeChangeStart', () => {
        setLoading(true);
    });

    Router.events.on('routeChangeComplete', () => {
        setLoading(false);
    });

    Router.events.on('routeChangeError', () => {
        setLoading(false);
    });

    if (loading) return <PageLoader />;

    return (
        <ErrorBoundary>
            <Component {...pageProps} />
        </ErrorBoundary>
    );
};

export default MyApp;
