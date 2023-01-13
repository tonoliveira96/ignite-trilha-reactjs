import { useEffect, useState } from 'react';
import api from '../../api/services';
import { Header } from '../../components/Header';
import { Profile, ProfileProps } from '../../components/Profile';
import { ContainerHome } from './styles';


export function Home() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);


  const getProfile = async () => {
    const { data } = await api.get('/users/tonoliveira96');
    setProfile({
      avatr_url: data.avatar_url,
      name: data.name,
      bio: data.bio,
      followers: data.followers,
      login: data.login
    });
  };

  const getPostsData = async()=>{
    const response = await api.get('/repos//tonoliveira96/ignite-trilha-reactjs-2022/issues')
  }

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
      <Header />
      <Profile data={profile} />
      <ContainerHome>
        <h1>Home</h1>
      </ContainerHome>
    </>

  );
}