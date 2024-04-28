'use server';
import { ModelName } from '@premieroctet/next-admin';
import { redirect } from 'next/navigation';
export const submitModerate = async (model: ModelName, ids: number[] | string[]) => {
  return redirect(`${process.env.NEXTAUTH_URL}/add-article/moderate/${ids[0]}`);
};
