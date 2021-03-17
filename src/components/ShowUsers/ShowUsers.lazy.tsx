import React, { lazy, Suspense } from 'react';

const LazyShowUsers = lazy(() => import('./ShowUsers'));

const ShowUsers = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyShowUsers {...props} />
  </Suspense>
);

export default ShowUsers;
