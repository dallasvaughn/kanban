import { State, Action } from './boardContext';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD BOARD':
      return {
        ...state,
        boards: [...state.boards, action.payload],
      };
  }
  return { ...state, boards: state.boards };
};

export default reducer;
