import { options } from '@/app/api/auth/[...nextauth]/options';
import EditProfile from '@/components/EditProfile';
import Login from '@/components/Login';
import { NextPage } from 'next';
import { getServerSession } from 'next-auth';

const ProfileEditPage: NextPage = async () => {
  const session = await getServerSession(options);
  if (!session) {
    return <Login />;
  }
  return <EditProfile />;
};

/* const ProfileEditPage:NextPage = () => {
  return <EditProfile />;
} */

export default ProfileEditPage;
