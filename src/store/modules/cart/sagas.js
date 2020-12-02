import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { useSelector } from 'react-redux';

import api from '../../../services/api';

import { 
  addToCartSuccess, 
  incrementItemQuantity, 
  decrementItemSuccess,
} from './actions';
import * as selectors from './selectors';

function* addToCart({ id }) {
  
  const cartItems = yield select(selectors.cartitems);
  const elementPos = cartItems.findIndex((element) => (element.id === id));
  
  if (elementPos === -1) {
    const response = yield call(api.get, `/products/${id}`);
    yield put(addToCartSuccess(response.data));
  } else {
    yield put(incrementItemQuantity(id));
  }
}

function* decrementItem({ id }) {
  const cartItems = yield select(selectors.cartitems);

  let clickedItem = cartItems.filter((element) => (element.id === id));
  if (clickedItem.quantity < 2) {
    return;
  }
  yield put(decrementItemSuccess(id));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/DECREMENT_REQUEST', decrementItem)
]);