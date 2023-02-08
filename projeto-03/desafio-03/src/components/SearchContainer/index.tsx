import { Container, ContainerTitle, Input } from './styles';

interface SearchContainerProps {
  post_amount: number;
  onChange: () => {};
}

export function SearchContainer({ post_amount, onChange }: SearchContainerProps) {
  return (
    <Container>
      <ContainerTitle>
        <h2>Publicações</h2>
        <span>{post_amount} publicações</span>
      </ContainerTitle>
      <Input />
    </Container>
  );
}