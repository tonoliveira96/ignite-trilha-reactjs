import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import api from '../../api/services';
import { CardPost, CardPostProps } from '../../components/CardPost';
import { Header } from '../../components/Header';
import { Profile, ProfileProps } from '../../components/Profile';
import { SearchContainer } from '../../components/SearchContainer';
import { ContainerHome, ContainerPosts } from './styles';

export function Home() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);
  const [cardPosts, setCardPosts] = useState<CardPostProps[]>([]);

  const getProfile = async () => {
    const { data } = await api.get('/users/tonoliveira96');
    setProfile({
      avatr_url: data.avatar_url,
      name: data.name,
      bio: data.bio,
      followers: data.followers,
      login: data.login,
    });
  };

  const getPostsData = async () => {
    const { data } = await api.get(
      '/repos/tonoliveira96/ignite-trilha-reactjs-2022/issues'
    );

    const mappedPosts = data.map((post: any) => ({
      id: post.number,
      title: post.title,
      created_at: formatDistance(new Date(post.created_at), new Date(), { locale: ptBR }),
      body: post.body,
    }));
    setCardPosts(mappedPosts);
  };

  useEffect(() => {
    getProfile();
    getPostsData();
  }, []);

  return (
    <>
      <Header />
      <Profile data={profile} />
      <ContainerHome>
        <SearchContainer post_amount={cardPosts.length}/>
        <ContainerPosts>
          {cardPosts.map((cards) => (
            <CardPost
              key={cards.id}
              id={cards.id}
              body={cards.body}
              created_at={cards.created_at}
              title={cards.title}
            />
          ))}
        </ContainerPosts>
      </ContainerHome>
    </>
  );
}
