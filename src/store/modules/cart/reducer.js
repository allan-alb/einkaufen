import produce from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return [...state, { ...action.product, quantity: 1 }];

    case '@cart/REMOVE_FROM_CART':
      let removedCart = state.filter((element) => (element.id !== action.id));
      return removedCart;

    case '@cart/INCREMENT_ITEM':
      let increasedCart = state.map(element => {
        if (element.id === action.id) {
          let current = {...element, quantity: element.quantity + 1};
          return current;
        } else {
          let current = element;
          return current;
        }
      });
      return increasedCart;

    case '@cart/DECREMENT_ITEM':
      let reducedCart = state.map(element => {
        if (element.id === action.id) {
          let current = {...element, quantity: element.quantity - 1};
          return current;
        } else {
          let current = element;
          return current;
        }
      });
      return reducedCart;

    default:
      return state;
  }
}