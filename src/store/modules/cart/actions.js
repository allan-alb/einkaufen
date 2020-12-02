export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  }
}

export function incrementItemQuantity(id) {
  return {
    type: '@cart/INCREMENT_ITEM',
    id,
  }
}

export function decrementItemRequest(id) {
  return {
    type: '@cart/DECREMENT_REQUEST',
    id,
  }
}

export function decrementItemSuccess(id) {
  return {
    type: '@cart/DECREMENT_ITEM',
    id,
  }
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE_FROM_CART',
    id,
  };
}
