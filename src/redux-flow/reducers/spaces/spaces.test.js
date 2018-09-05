import space, { initialState } from './index'

// import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, INCREMENT_QUANTITY_PRODUCT_ON_CART, DECREMENT_QUANTITY_PRODUCT_ON_CART } from './actions'


import deepFreeze from 'deep-freeze'

describe('Space reducer', () => {

  describe('Smoke Test', () => {
    it('should space be a function', () => {
      expect(typeof space).toBe('function')
    })
  })

  describe('Initial State', () => {
    it('should return initial state when state is undefined', () => {
      const before = undefined
      const action = deepFreeze({ type: '' })
      const after = initialState
      expect(space(before, action)).toEqual(after)
    })

    it('should return state when action is undefined', () => {
      const before = deepFreeze([])
      const action = deepFreeze({ 
        type: ''})
      const after = []
      expect(space(before, action)).toEqual(after)
    })
  })

//   describe('Add product to cart', () => {
//     it('should add a todo item', () => {
//       const before = deepFreeze([])
//       const action = deepFreeze({ 
//         type: ADD_PRODUCT_TO_CART,
//         payload: {
//           book: {
//             photo: 'img',
//             title: 'test',
//             description: 'test desc',
//             price: 100
//           }
//         }
//       })
//       const after = [{
//         book: {
//           photo: 'img',
//           title: 'test',
//           description: 'test desc',
//           price: 100
//         },
//         quantity: 1
//       }]
//       expect(cart(before, action)).toEqual(after);
//     })

//     it('should add a new item to cart', () => {
//       const before = deepFreeze([{
//         id: 0,
//         text: 'Hey',
//         quantity: 1
//       }])

//       const action = deepFreeze({ 
//         type: ADD_PRODUCT_TO_CART,
//         payload: {
//           id: 1,
//           text: 'HEYO'
//         }
//       })

//       const after = [{
//         id: 0,
//         text: 'Hey',
//         quantity: 1
//       },{
//         id: 1,
//         text: 'HEYO',
//         quantity: 1
//       }]
//       expect(cart(before, action)).toEqual(after);
//     })
//   })

//   describe('Remove product from cart', () => {
//     it('should remove item', () => {
//       const before = deepFreeze([{
//         id: 0,
//         text: 'Hey'
//       }])
//       const action = deepFreeze({ 
//         type: REMOVE_PRODUCT_FROM_CART,
//         payload: {
//           index: 0
//         }
//       })
//       const after = []
//       expect(cart(before, action)).toEqual(after);
//     })

//     it('should remove another item', () => {
//       const before = deepFreeze([{
//         id: 0,
//         text: 'Ho'
//       },
//       {
//         id: 0,
//         text: 'Hey'
//       }
//     ])
//       const action = deepFreeze({ 
//         type: REMOVE_PRODUCT_FROM_CART,
//         payload: {
//           index: 1
//         }
//       })
//       const after = [{
//         id: 0,
//         text: 'Ho'
//       }]
//       expect(cart(before, action)).toEqual(after);
//     })
//   })

//   describe('Increment quantity of product on cart', () => {
//     it('should increment 1 to a selected product on cart', () => {
//       const before = deepFreeze([{
//         id: 0,
//         text: 'Hey',
//         quantity: 1
//       }])
//       const action = deepFreeze({ 
//         type: INCREMENT_QUANTITY_PRODUCT_ON_CART,
//         payload: {
//           index: 0
//         }
//       })
//       const after = [{
//         id: 0,
//         text: 'Hey',
//         quantity: 2
//       }]
//       expect(cart(before, action)).toEqual(after);
//     })

//     it('should increment 1 to a selected product on cart', () => {
//       const before = deepFreeze([{
//         id: 0,
//         text: 'Hey',
//         quantity: 1
//       },
//       {
//         id: 0,
//         text: 'Hey',
//         quantity: 1
//       }])
//       const action = deepFreeze({ 
//         type: INCREMENT_QUANTITY_PRODUCT_ON_CART,
//         payload: {
//           index: 1
//         }
//       })
//       const after = [{
//         id: 0,
//         text: 'Hey',
//         quantity: 1
//       },{
//         id: 0,
//         text: 'Hey',
//         quantity: 2
//       }]
//       expect(cart(before, action)).toEqual(after);
//     })
//   })

//   describe('Decrement quantity of product on cart', () => {
//     it('should decrement 1 to a selected product on cart', () => {
//       const before = deepFreeze([{
//         id: 0,
//         text: 'Hey',
//         quantity: 2
//       }])
//       const action = deepFreeze({ 
//         type: DECREMENT_QUANTITY_PRODUCT_ON_CART,
//         payload: {
//           index: 0
//         }
//       })
//       const after = [{
//         id: 0,
//         text: 'Hey',
//         quantity: 1
//       }]
//       expect(cart(before, action)).toEqual(after);
//     })

//     it('should decrement 1 to a selected product on cart', () => {
//       const before = deepFreeze([{
//         id: 0,
//         text: 'Hey',
//         quantity: 1
//       },
//       {
//         id: 0,
//         text: 'Hey',
//         quantity: 2
//       }])
//       const action = deepFreeze({ 
//         type: DECREMENT_QUANTITY_PRODUCT_ON_CART,
//         payload: {
//           index: 1
//         }
//       })
//       const after = [{
//         id: 0,
//         text: 'Hey',
//         quantity: 1
//       },{
//         id: 0,
//         text: 'Hey',
//         quantity: 1
//       }]
//       expect(cart(before, action)).toEqual(after);
//     })
//   })

})