import { NextAdmin } from '@premieroctet/next-admin';
import { getPropsFromParams } from '@premieroctet/next-admin/dist/appRouter';
import '@premieroctet/next-admin/dist/styles.css';
import prisma from '@/services/prisma';
import schema from '../../../../prisma/json-schema/json-schema.json';
import {options} from '@/config/admin'
import { submitFormAction } from '@/actions/nextadmin';

export default async function AdminPage({
  params,
  searchParams,
}: {
  params: { [key: string]: string[] };
  searchParams: { [key: string]: string | string[] | undefined } | undefined;
}) {
  const props = await getPropsFromParams({
    params: params.nextadmin,
    searchParams,
    options,
    prisma,
    schema,
    action: submitFormAction,
  });

  return <NextAdmin {...props} />;
}
