import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '@/components/layout/Layout';

function ZellerBusinessBlogApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default ZellerBusinessBlogApp;
