export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      }
    case 'REVOME_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload.id),
      }
    default:
      return state
  }
}
