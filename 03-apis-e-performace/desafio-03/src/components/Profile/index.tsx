
import { ContainerInfoProfile, ContainerProfile, FooterContainerProfile, HeaderContainerProfile } from './styles';
import { } from "phosphor-react";

export function Profile() {
  return (
    <ContainerProfile>
      <img src="https://github.com/tonoliveira96.png" alt="Foto de perfil" />

      <ContainerInfoProfile>
        <HeaderContainerProfile>
          <h3>Everton</h3>

          <a href="https://github.com/tonoliveira96" target="_blank">
            GITHUB
          </a>
        </HeaderContainerProfile>

        <div className='content'>
          <p>Assim mesmo, a contínua expansão de nossa atividade apresenta tendências no sentido de aprovar a manutenção da gestão inovadora da qual fazemos parte.</p>

          <FooterContainerProfile>
            <span>

              Github
            </span>
            <span>Site</span>
            <span>
              Seguidores</span>
          </FooterContainerProfile>
        </div>
      </ContainerInfoProfile>

    </ContainerProfile>
  );
}