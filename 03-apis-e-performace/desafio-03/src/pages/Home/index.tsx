import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';
import { ContainerHome } from './styles';

export function Home() {
  return (
    <>
      <Header />
      <Profile />
      <ContainerHome>
        <h1>Home</h1>
      </ContainerHome>
    </>

  );
}