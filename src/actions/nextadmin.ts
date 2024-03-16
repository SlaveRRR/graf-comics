'use server';
import { ActionParams } from '@premieroctet/next-admin';
import { submitForm } from '@premieroctet/next-admin/dist/actions';
import { options } from '@/config/admin';
import prisma from '@/services/prisma';
export const submitFormAction = async (params: ActionParams, formData: FormData) => {
  return submitForm({ ...params, prisma, options }, formData);
};
