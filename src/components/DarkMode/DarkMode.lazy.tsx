import React, { lazy, Suspense } from 'react';

const LazyDarkMode = lazy(() => import('./DarkMode'));

const DarkMode = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDarkMode {...props} />
  </Suspense>
);

export default DarkMode;
