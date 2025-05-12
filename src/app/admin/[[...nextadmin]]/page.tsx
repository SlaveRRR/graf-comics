import { options } from '@/config/admin';
import prisma from '@/services/prisma';
import { NextAdmin } from '@premieroctet/next-admin';
import { getNextAdminProps } from '@premieroctet/next-admin/appRouter';
import '../../../styles/styles.css';

export default async function AdminPage({
  params,
  searchParams,
}: {
  params: { [key: string]: string[] };
  searchParams: { [key: string]: string | string[] | undefined } | undefined;
}) {
  const props = await getNextAdminProps({
    params: params.nextadmin as string[],
    searchParams,
    options,
    prisma,
    basePath: '/admin',
    apiBasePath: '/api/admin',
  });

  return <NextAdmin {...props} />;
}
