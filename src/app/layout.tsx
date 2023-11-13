import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';
// react toastify
import Layout from '@layout/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home | Roman Developer Experts',
  description:
    'We provide technology-driven solutions that meet business goals.',
  applicationName: 'Roman Developer Experts',
  authors: {
    url: 'https://github.com/roman-developer-experts',
    name: 'Roman Dev Experts',
  },
  keywords: ['Roman Developer Experts'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-pt-40 scroll-smooth">
      <body className={mulish.className}>
        <Layout>
          {children}
          <ToastContainer
            position="top-center"
            autoClose={3500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </Layout>
      </body>
    </html>
  );
}
