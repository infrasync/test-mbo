import { Suspense } from 'react';

import TodoPageFeatures from '@/components/features/TodoPageFeatures';
import PageLayout from '@/components/layouts/PageLayout';

export default async function HomePage() {
  return (
    <Suspense>
      <PageLayout>
        <TodoPageFeatures />
      </PageLayout>
    </Suspense>
  );
}
