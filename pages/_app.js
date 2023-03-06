import '../styles/globals.css';
import '../styles/scss/addons.scss';
import NextNProgress from 'nextjs-progressbar';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import SEO from '../src/config/Next-seo.config';

function WeekGenz({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        strategy='lazyOnload'
      />
      <Script strategy='lazyOnload' id='google-analytics'>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');`}
      </Script>
      <DefaultSeo {...SEO} />
      <NextNProgress
        color='#453C79'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default WeekGenz;
