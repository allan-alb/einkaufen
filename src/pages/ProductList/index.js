import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../services/api';

import { addToCartRequest, removeFromCart } from '../../store/modules/cart/actions';

import { 
  Container, 
  List, 
  Item, 
  ItemInfo,
  ItemImage, 
  ItemTitle, 
  ItemDescription, 
  ItemPrice, 
  AddToCartButton,
} from './styles';

function ProductList() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  async function loadProducts() {
    const response = await api.get('/products');

    setProducts(response.data);
  }

  useEffect(() => {
    loadProducts();
  }, [])

  function addItem(id) {
    dispatch(addToCartRequest(id));
  }

  return (
    <Container>
      <List>
        {
          products.map(product => (
            <Item>
              <ItemImage src={product.img_url} />
              <ItemInfo>
                <ItemTitle>
                  {product.title}
                </ItemTitle>
                <ItemDescription>
                  {product.description}
                </ItemDescription>
                <ItemPrice>R$ {product.price}</ItemPrice>
              </ItemInfo>
              <AddToCartButton onClick={() => addItem(product.id)}>Adicionar</AddToCartButton>
            </Item>
          ))
        }
      </List>
    </Container>
  );
}

export default ProductList;