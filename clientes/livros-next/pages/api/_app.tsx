import 'bootstrap/dist/css/bootstrap.css'
import '../../src/app/globals.css'
import type { AppProps } from 'next/app'
import Document, { Html, Head, Main, NextScript } from 'next/document';

function MyApp ({ Component, pageProps} : AppProps) {
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale = 1"/>
        </Head>
        <Component {...pageProps} />
        </>
    )
}

export default MyApp