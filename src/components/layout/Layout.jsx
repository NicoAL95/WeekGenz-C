import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';

export default function Layout({
  title = 'WeekGenz',
  content = 'Web Design, Web Apps, Web Converter, Web Business, Jasa Web',
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={content}></meta>
      </Head>

      {/* toast */}
      <Toaster />

      {/* navbar */}
      <Navbar />

      {children}

      {/* footer */}
      <Footer />
    </>
  );
}
