import { Minus, Plus } from 'phosphor-react';
import { AmountButtons } from './styles';

export function AmountButtonsComponent() {
  return (
    <AmountButtons>
      <button>
        <Minus size={ 16 } weight="fill" />
      </button>
      <span className='amount'>1</span>
      <button>
        <Plus size={ 16 } weight="fill" />
      </button>
    </AmountButtons>
  );
}