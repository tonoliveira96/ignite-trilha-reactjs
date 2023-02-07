import { ContainerCardPost } from './styles';

export interface CardPostProps {
  id: number;
  created_at: Date;
  title: string;
  body: string;
}

export function CardPost({
  id,
  body,
  created_at,
  title,
}: CardPostProps) {
  
  return (
    <ContainerCardPost key={id.toString()} href={`post/${id}`}>
      <div>
        <h2>{title}</h2>
        <span>{created_at.toString()}</span>
      </div>
      <p>{body}</p>
    </ContainerCardPost>
  );
}

export default CardPost