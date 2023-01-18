import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/services';
import { Header } from '../../components/Header';
import { CardPost, ContainerPost, FooterContainerPostCard, HeaderContainerPostCard, PostBody } from './styles';

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

  console.log(params.id);

  async function getPostData() {
    const { data } = await api.get(`/repos/tonoliveira96/ignite-trilha-reactjs-2022/issues/${params.id}`);
    
    setPost({
      body: data.body,
      created_at: data.created_at,
      title: data.title,
      html_url: data.tml_url,
      user: data.user.login,
      comments: data.comments
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
            <a href="/"> VOLTAR</a>
            <a href={post.html_url} target="_blank"> VER NO GITHUB</a>
          </HeaderContainerPostCard>
          <h1>{post.title}</h1>
          <FooterContainerPostCard>
          <span>
              {post.user}
            </span>
            <span>{post.created_at}</span>
            <span>
            {post.comments}
              Comentários
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