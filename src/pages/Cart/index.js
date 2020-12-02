import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddCircleOutline, MdRemoveCircleOutline, MdCancel } from 'react-icons/md';

import { incrementItemQuantity, decrementItemRequest, removeFromCart } from '../../store/modules/cart/actions';

import { 
  Container, 
  Content, 
  Item, 
  ItemsList, 
  NoItemsDiv,
  NoItems,
  ItemTitle, 
  ItemImage,
  ActionButton,
  Quantity, 
  Controls,
  ButtonContainer,
  PlaceOrderButton,
} from './styles';

function Cart() {
  const cartProducts = useSelector(state => state.cart);
  const dispatch = useDispatch();

  function incrementItem(id) {
    dispatch(incrementItemQuantity(id));
  }

  function decrementItem(id) {
    dispatch(decrementItemRequest(id));
  }

  function removeItem(id) {
    dispatch(removeFromCart(id));
  }

  if (cartProducts.length === 0) {
    return (
      <Container>
        <Content>
          <ItemsList>
            <NoItemsDiv>
              <NoItems>Você não tem items no seu carrinho. Clique abaixo para navegar pelo catálogo de produtos.</NoItems>
              <Link to="/products">Ir para catálogo de produtos</Link>
            </NoItemsDiv>
          </ItemsList>
        </Content>
      </Container>
    )
  }

  return (
    <Container>
      <Content>
        <ItemsList>
          {
            cartProducts.map(product => (
              <Item>
                <ItemImage src={product.img_url} />
                <ItemTitle>{product.title}</ItemTitle>
                <Controls>
                  <ActionButton onClick={() => incrementItem(product.id)}>
                    <MdAddCircleOutline color="#333" size={16} />
                  </ActionButton>
                  <Quantity type="text" value={product.quantity} disabled="disabled" maxLength="3" />
                  <ActionButton onClick={() => decrementItem(product.id)}>
                    <MdRemoveCircleOutline color="#333" size={16} />
                  </ActionButton>
                  <ActionButton onClick={() => removeItem(product.id)}>
                    <MdCancel color="#333" size={16} />
                  </ActionButton>
                </Controls>
              </Item>
            ))
          }
        </ItemsList>
        <ButtonContainer>
          <PlaceOrderButton>Confirmar pedido</PlaceOrderButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
}

export default Cart;