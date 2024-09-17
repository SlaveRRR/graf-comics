import { options } from '@/app/api/auth/[...nextauth]/options';
import EditProfile from '@/components/EditProfile';
import Login from '@/components/Login';
import { NextPage } from 'next';
import { getServerSession } from 'next-auth';

const ProfilePage: NextPage = async () => {
  const session = await getServerSession(options);
  if (!session) {
    return <Login />;
  }
  return <EditProfile />;
};

export default ProfilePage;
