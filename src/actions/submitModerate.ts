'use server';
import { redirect } from 'next/navigation';
export const submitModerate = async (ids: number[] | string[]) => {
  return redirect(`${process.env.NEXTAUTH_URL}/add-article/moderate/${ids[0]}`);
};
