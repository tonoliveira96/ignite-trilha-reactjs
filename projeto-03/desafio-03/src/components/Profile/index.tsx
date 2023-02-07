
import { FaBuilding, FaGithub, FaUserFriends } from "react-icons/fa";
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
              <FaGithub size={18} />
              {data.login}
            </span>
            <span>
              <FaBuilding size={18} />
              <span>Site</span>
            </span>
            <span>
              <FaUserFriends size={18} />
              {data.followers} Seguidores
            </span>
          </FooterContainerProfile>
        </div>
      </ContainerInfoProfile>

    </ContainerProfile>
  );
}