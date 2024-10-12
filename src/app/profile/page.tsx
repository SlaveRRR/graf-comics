import { options } from '@/app/api/auth/[...nextauth]/options';
import Login from '@/components/Login';
import ProfileAuthor from '@/components/ProfileAuthor';
import ProfileReader from '@/components/ProfileReader';
import { NextPage } from 'next';
import { getServerSession } from 'next-auth';

const ProfilePage: NextPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    return <Login />;
  }
  return session.user.role === 'AUTHOR' ? <ProfileAuthor /> : <ProfileReader />;
};

export default ProfilePage;
