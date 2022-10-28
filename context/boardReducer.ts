import { State, Action } from './boardContext';

const reducer = (state: State, action: Action): State => {
  let index = 0;
  switch (action.type) {
    case 'ADD BOARD':
      return {
        ...state,
        boards: [...state.boards, action.payload],
      };
    case 'CHANGE BOARD':
      return {
        ...state,
        activeBoard: action.payload,
      };
    case 'EDIT BOARD':
      index = state.boards.findIndex(
        (board) => board.name === state.activeBoard.name
      );
      state.boards[index] = action.payload;
      return {
        ...state,
        activeBoard: action.payload,
      };
    case 'UPDATE BOARD':
      return {
        ...state,
        activeBoard: action.payload,
      };
    case 'DELETE BOARD':
      return {
        ...state,
        boards: action.payload.boards,
        activeBoard: action.payload.activeBoard,
      };
  }
  return { ...state, boards: state.boards };
};

export default reducer;
