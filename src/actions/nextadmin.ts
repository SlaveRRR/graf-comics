'use server';
import { ActionParams, ModelName } from '@premieroctet/next-admin';
import { deleteResourceItems, submitForm } from '@premieroctet/next-admin/dist/actions';
import { options } from '@/config/admin';
import prisma from '@/services/prisma';
export const submitFormAction = async (params: ActionParams, formData: FormData) => {
  return submitForm({ ...params, prisma, options }, formData);
};

export const deleteItem = async (model: ModelName, ids: string[] | number[]) => {
  return deleteResourceItems(prisma, model, ids);
};
