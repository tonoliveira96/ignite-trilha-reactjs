import { CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from 'phosphor-react';
import { AmountButtonsComponent } from '../../components/AmoutButtons';
import { InputForm } from '../../components/Form/InputForm';
import { ButtonConfirm, ButtonPayMethod, CartItem, ContainerCart, ContainerCheckout, ContainerForm, ContentCart, FooterCard, FormCardContent } from './styles';

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
          <div className='payMethod'>
            <ButtonPayMethod>
              <CreditCard size={ 16 } color="#8047F8" />
              Cartão de crédito
            </ButtonPayMethod>
            <ButtonPayMethod>
              <CreditCard size={ 16 } color="#8047F8" />
              Cartão de débito
            </ButtonPayMethod>
            <ButtonPayMethod>
              <CreditCard size={ 16 } color="#8047F8" />
              Dinheiro
            </ButtonPayMethod>
          </div>
        </FormCardContent>

      </ContainerForm>
      <ContainerCart>
        <h3>Cafés selecionados</h3>
        <ContentCart>
          <CartItem>
            <img src="./src/assets/produts/expresso.png" alt="" />
            <div>
              <p>Descrição</p>
              <div className='buttonsActions'>
                <AmountButtonsComponent />
                <button className='removeItem'>
                  <Trash size={ 16 } color="#8047F8" />
                  REMOVER
                </button>
              </div>
            </div>
            <span>9,90</span>
          </CartItem>
          <FooterCard>
            <div>
              Total de itens
              <span>R$ 29,70</span>
            </div>
            <div>
              Entrega
              <span>R$ 29,70</span>
            </div>
            <div className='total'>
              Total
              <span>R$ 29,70</span>
            </div>
          </FooterCard>
          <ButtonConfirm>
            CONFIRMAR
          </ButtonConfirm>
        </ContentCart>
      </ContainerCart>
    </ContainerCheckout>
  )
    ;
}