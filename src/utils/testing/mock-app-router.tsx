// app-router-context-provider-mock.tsx

import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  AppRouterContext,
  AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import React from 'react';
import { vi } from 'vitest';

import '@mantine/notifications/styles.css';
import '@/globals.css';
import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';

import { theme } from '@/theme';

const queryClient = new QueryClient();

export type AppRouterContextProviderMockProps = {
  router: Partial<AppRouterInstance>;
  children: React.ReactNode;
};

export const AppRouterContextProviderMock = ({
  router,
  children,
}: AppRouterContextProviderMockProps): React.ReactNode => {
  const mockedRouter: AppRouterInstance = {
    back: vi.fn(),
    forward: vi.fn(),
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
    ...router,
  };
  return (
    <AppRouterContext.Provider value={mockedRouter}>
      <MantineProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </MantineProvider>
    </AppRouterContext.Provider>
  );
};
