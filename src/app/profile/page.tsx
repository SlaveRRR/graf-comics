import React from 'react';
import { NextPage } from 'next';
import ProfileReader from '@/components/ProfileReader';
import ProfileAuthor from '@/components/ProfileAuthor';
import { getServerSession } from 'next-auth';
import Login from '@/components/Login';
import { options } from '@/app/api/auth/[...nextauth]/options';

const ProfilePage: NextPage = async () => {
  const session = await getServerSession(options);
  if (!session) {
    return <Login />;
  }
  return session.user.role === 'AUTHOR' ? <ProfileAuthor /> : <ProfileReader />;
};

export default ProfilePage;
