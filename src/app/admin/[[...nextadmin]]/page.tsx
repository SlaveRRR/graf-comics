import { NextAdmin } from '@premieroctet/next-admin';
import { getPropsFromParams } from '@premieroctet/next-admin/dist/appRouter';
import prisma from '@/services/prisma';
import schema from '../../../../prisma/json-schema/json-schema.json';
import { options } from '@/config/admin';
import { deleteItem, submitFormAction, searchResource } from '@/actions/nextadmin';
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
