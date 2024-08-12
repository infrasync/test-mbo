import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { NavigationProgress } from '@mantine/nprogress';
import { GeistSans } from 'geist/font/sans';
import React from 'react';

import '@mantine/notifications/styles.css';
import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';

import { theme } from '@/theme';

export const metadata = {
  title: 'Boilertine - By Roni Ardiyanto',
  description: 'Doing it Now.',
};

type Props = {
  children: React.ReactNode;
};

export default async function LocaleLayout({ children }: Props) {
  return (
    <html lang="id">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </head>
      <body className={GeistSans.className}>
        <MantineProvider theme={theme}>
          <Notifications position="top-right" />
          <NavigationProgress aria-label="Progress Load Bar" />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
