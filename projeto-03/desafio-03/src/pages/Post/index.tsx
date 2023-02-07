import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import { FaCalendar, FaChevronLeft, FaComment, FaGithub } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import api from '../../api/services';
import { Header } from '../../components/Header';
import {
  CardPost,
  ContainerPost,
  FooterContainerPostCard,
  HeaderContainerPostCard,
  PostBody
} from './styles';

interface PostProps {
  body: string;
  title: string;
  created_at: string;
  html_url: string;
  user: string;
  comments: number;
}

export function Post() {
  const [post, setPost] = useState<PostProps>({} as PostProps);
  const params = useParams();

  async function getPostData() {
    const { data } = await api.get(
      `/repos/tonoliveira96/ignite-trilha-reactjs-2022/issues/${params.id}`
    );

    setPost({
      body: data.body,
      created_at: formatDistance(new Date(data.created_at), new Date(), { locale: ptBR }),
      title: data.title,
      html_url: data.tml_url,
      user: data.user.login,
      comments: data.comments,
    });
  }
  useEffect(() => {
    getPostData();
  }, [params.id]);

  return (
    <>
      <Header />
      <ContainerPost>
        <CardPost>
          <HeaderContainerPostCard>
            <a href='/'>
              <FaChevronLeft size={16} />
              VOLTAR
            </a>
            <a href={post.html_url} target='_blank'>
              {' '}
              VER NO GITHUB
            </a>
          </HeaderContainerPostCard>
          <h1>{post.title}</h1>
          <FooterContainerPostCard>
            <span>
              <FaGithub size={18} />
              {post.user}
            </span>
            <span>
              <FaCalendar size={18} />
              {post.created_at}
            </span>
            <span>
              <FaComment size={18} />
              {post.comments} Comentários
            </span>
          </FooterContainerPostCard>
        </CardPost>
        <ContainerPost>
          <PostBody>
            <p>{post.body}</p>
          </PostBody>
        </ContainerPost>
      </ContainerPost>
    </>
  );
}
