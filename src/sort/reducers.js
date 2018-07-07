import { CHANGE_OPTION } from './actions'

export const sortOption = (state = {
  field: 'timestamp',
  order: -1
}, action) => {
  switch (action.type) {
    case CHANGE_OPTION:
      if (action.field === state.field) {
        return {
          ...state,
          order: -state.order
        }
      }
      return {
        ...state,
        field: action.field
      }
    default:
      return state
  }
}
