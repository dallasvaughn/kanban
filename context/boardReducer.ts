import { State, Action } from './boardContext';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD BOARD':
      return {
        boards: [...state.boards, action.payload],
      };
  }
  return { boards: state.boards };
};

export default reducer;
