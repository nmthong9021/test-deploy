export default function reducer(state, action) {
  switch (action.type) {
    case 'init':
      return {
        cards: action.payload.cards,
      }

    case 'add_card':
      return {
        // ...state,
        cards: [...state.cards, { ...action.payload.new_card, id: state.cards.length, isExist: true}]
      }

    case 'delete_card':
      return {
          cards: state.cards.map(c => c.id === action.payload.id ? { ...c, isExist: false } : c)
        } 

    case 'update_filter':
      return {
        ...state,
        query: action.payload
      }

    case 'complete_task':
      return {
        ...state,
        items: state.items.map(i => i.id === action.payload ? { ...i, complete: true } : i)
      }

    default:
      return state;
  }
}