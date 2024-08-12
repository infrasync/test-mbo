import { Suspense } from 'react';

import HomePageFeatures from '@/components/features/HomePageFeatures';
import PageLayout from '@/components/layouts/PageLayout';

export default async function HomePage() {
  return (
    <Suspense>
      <PageLayout>
        <HomePageFeatures />
      </PageLayout>
    </Suspense>
  );
}
