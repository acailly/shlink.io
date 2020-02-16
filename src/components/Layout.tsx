import React, { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import { ExternalLink } from 'react-external-link';
import Link from 'next/link';
import Highlight from 'react-highlight';
import Menu from './Menu';
import Footer from './Footer';
import SectionHeader from './SectionHeader';

interface LayoutProps {
  pageTitle?: string;
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, pageTitle }) => {
  const siteName = 'Shlink - The URL shortener';
  const title = `${siteName}${pageTitle ? ` | ${pageTitle}` : ''}`;
  const description = 'A self-hosted and PHP-based URL shortener application with CLI and REST interfaces';

  return (
    <React.Fragment>
      <NextSeo
        description={description}
        title={title}
        twitter={{
          site: '@shlinkio',
          handle: '@acelayaa',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          title,
          description,
          type: 'website',
          url: 'https://shlink.io',
          site_name: siteName, // eslint-disable-line
          images: [
            {
              url: 'https://shlink.io/images/shlink-hero.png',
              height: 240,
              width: 625,
            },
            {
              url: 'https://pbs.twimg.com/profile_banners/760406054354186240/1470831159/1500x500',
              height: 1500,
              width: 1500,
            },
          ],
        }}
      />

      <Head>
        <meta name="theme-color" content="#4696e5" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/gif" href="/favicon.gif" />
        <link rel="apple-touch-icon" sizes="16x16" href="/icons/icon-16x16.png" />
        <link rel="apple-touch-icon" sizes="24x24" href="/icons/icon-24x24.png" />
        <link rel="apple-touch-icon" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="apple-touch-icon" sizes="40x40" href="/icons/icon-40x40.png" />
        <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="64x64" href="/icons/icon-64x64.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="128x128" href="/icons/icon-128x128.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="150x150" href="/icons/icon-150x150.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="160x160" href="/icons/icon-160x160.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon-167x167.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="196x196" href="/icons/icon-196x196.png" />
        <link rel="apple-touch-icon" sizes="228x228" href="/icons/icon-228x228.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256x256.png" />
        <link rel="apple-touch-icon" sizes="310x310" href="/icons/icon-310x310.png" />
        <link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png" />
        <link rel="apple-touch-icon" sizes="1024x1024" href="/icons/icon-1024x1024.png" />
        <link rel="icon" type="image/png" sizes="1024x1024" href="/icons/icon-1024x1024.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/icon-512x512.png" />
        <link rel="icon" type="image/png" sizes="384x384" href="/icons/icon-384x384.png" />
        <link rel="icon" type="image/png" sizes="310x310" href="/icons/icon-310x310.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/icons/icon-256x256.png" />
        <link rel="icon" type="image/png" sizes="228x228" href="/icons/icon-228x228.png" />
        <link rel="icon" type="image/png" sizes="196x196" href="/icons/icon-196x196.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="180x180" href="/icons/icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="167x167" href="/icons/icon-167x167.png" />
        <link rel="icon" type="image/png" sizes="160x160" href="/icons/icon-160x160.png" />
        <link rel="icon" type="image/png" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="icon" type="image/png" sizes="150x150" href="/icons/icon-150x150.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/icons/icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/icons/icon-128x128.png" />
        <link rel="icon" type="image/png" sizes="120x120" href="/icons/icon-120x120.png" />
        <link rel="icon" type="image/png" sizes="114x114" href="/icons/icon-114x114.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="76x76" href="/icons/icon-76x76.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/icons/icon-72x72.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/icons/icon-64x64.png" />
        <link rel="icon" type="image/png" sizes="60x60" href="/icons/icon-60x60.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icons/icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="40x40" href="/icons/icon-40x40.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="24x24" href="/icons/icon-24x24.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
        <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />
        <meta name="msapplication-square70x70logo" content="/icons/icon-70x70.png" />
        <meta name="msapplication-square144x144logo" content="/icons/icon-144x144.png" />
        <meta name="msapplication-square150x150logo" content="/icons/icon-150x150.png" />
        <meta name="msapplication-square310x310logo" content="/icons/icon-310x310.png" />
      </Head>

      <Menu />
      {pageTitle && <SectionHeader>{pageTitle}</SectionHeader>}
      <MDXProvider
        components={{
          a(props: any) {
            const { href } = props;
            const Component = href && href.startsWith('http') ? ExternalLink : Link;

            return <Component {...props} />;
          },
          code(props: any) {
            return <Highlight {...props} />;
          },
        }}
      >
        {children}
      </MDXProvider>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
