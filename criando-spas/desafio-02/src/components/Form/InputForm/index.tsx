import { InputHTMLAttributes } from 'react';
import { ContainerInput } from './styles';

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  size: number;
}

export function InputForm({size,...rest}: InputFormProps){
  return(
    <ContainerInput size={size} >
      <input {...rest}/>
    </ContainerInput>
  )
}