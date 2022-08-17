import { CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import { InputForm } from '../../components/Form/InputForm';
import { ContainerCart, ContainerCheckout, ContainerForm, FormCardContent } from './styles';

export function Checkout() {
  return (
    <ContainerCheckout>
      <ContainerForm>
        <h3>Complete seu pedido</h3>

        <FormCardContent>
          <div className='formInfo'>
            <MapPinLine size={ 22 } color="#C47F17" />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <InputForm placeholder='CEP' size={ 200 } />
          <InputForm placeholder='Rua' size={ 560 } />
          <div className='formSection'>
            <InputForm placeholder='Número' size={ 200 } />
            <InputForm placeholder='Complemento' size={ 348 } />
          </div>
          <div className='formSection'>
            <InputForm placeholder='Bairro' size={ 200 } />
            <InputForm placeholder='Cidade' size={ 276 } />
            <InputForm placeholder='UF' size={ 60 } />
          </div>
        </FormCardContent>

        <FormCardContent>
          <div className='formInfo'>
            <CurrencyDollar size={ 22 } color="#8047F8" />
            <div>
              <span>Pagamento</span>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>
        </FormCardContent>

      </ContainerForm>
      <ContainerCart>
        <h3>Cafés selecionados</h3>
      </ContainerCart>
    </ContainerCheckout>
  )
    ;
}