import { deleteItem, searchResource, submitFormAction } from '@/actions/nextadmin';
import { options } from '@/config/admin';
import prisma from '@/services/prisma';
import { NextAdmin } from '@premieroctet/next-admin';
import { getPropsFromParams } from '@premieroctet/next-admin/dist/appRouter';
import schema from '../../../../prisma/json-schema/json-schema.json';
import '../../../styles/styles.css';
export default async function AdminPage({
  params,
  searchParams,
}: {
  params: { [key: string]: string[] };
  searchParams: { [key: string]: string | string[] | undefined } | undefined;
}) {
  const props = await getPropsFromParams({
    params: params.nextadmin as string[],
    searchParams,
    options,
    prisma,
    schema,
    action: submitFormAction,
    deleteAction: deleteItem,
    searchPaginatedResourceAction: searchResource,
  });

  return <NextAdmin {...props} />;
}
