import React from 'react';
import { RouterLoader } from '@/components/UI';
import dynamic from 'next/dynamic';

const CatalogPage = dynamic(() => import('@/components/Catalog'), {
  loading: () => <RouterLoader />,
  ssr: false,
});

export default CatalogPage;
