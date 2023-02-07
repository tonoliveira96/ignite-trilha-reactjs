
import { ContainerInfoProfile, ContainerProfile, FooterContainerProfile, HeaderContainerProfile } from './styles';

export interface ProfileProps {
  avatr_url: string;
  name: string;
  bio: string;
  login: string;
  followers: string;
}

interface ProfileComponentProps {
  data: ProfileProps;
}

export function Profile({ data }: ProfileComponentProps) {
  return (
    <ContainerProfile>
      <img src={data.avatr_url} alt="Foto de perfil" />

      <ContainerInfoProfile>
        <HeaderContainerProfile>
          <h3>Everton</h3>

          <a href="https://github.com/tonoliveira96" target="_blank">
            GITHUB
          </a>
        </HeaderContainerProfile>

        <div className='content'>
          <p>{data.bio}</p>

          <FooterContainerProfile>
            <span>
              {data.login}
            </span>
            <span>Site</span>
            <span>
            {data.followers}
              Seguidores
              </span>
          </FooterContainerProfile>
        </div>
      </ContainerInfoProfile>

    </ContainerProfile>
  );
}