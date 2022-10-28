import { State, Action, Board } from './boardContext';

const reducer = (state: State, action: Action): State => {
  let index = 0;
  const { activeBoard } = state;
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
    case 'UPDATE TASK':
      const updateTask = (): Board => {
        const colNum = activeBoard.columns.findIndex(
          (item) => item.name === action.payload.column.name
        );
        activeBoard.columns[colNum].tasks = activeBoard.columns[
          colNum
        ].tasks.filter((item) => item.title !== action.payload.task.title);
        const newNum = activeBoard.columns.findIndex(
          (item) => item.name === action.payload.newStatus
        );
        action.payload.task.status = action.payload.newStatus;
        if (!activeBoard.columns[newNum].tasks.includes(action.payload.task)) {
          activeBoard.columns[newNum].tasks.push(action.payload.task);
        }
        return activeBoard;
      };
      return {
        ...state,
        activeBoard: updateTask(),
      };
    case 'SAVE TASK':
      const saveTask = (): Board => {
        const index = state.activeBoard.columns.findIndex(
          (column) => column.name === action.payload.status
        );
        const cleanSubtasks = action.payload.subtasks.filter(
          (item: { title: string; isCompleted: boolean }) =>
            item.title !== '' && item.title !== undefined
        );
        if (action.payload.status !== action.payload.task.status) {
          const colNum = activeBoard.columns.findIndex(
            (item) => item.name === action.payload.column.name
          );
          activeBoard.columns[colNum].tasks = activeBoard.columns[
            colNum
          ].tasks.filter((item) => item.title !== action.payload.task.title);
          const newNum = activeBoard.columns.findIndex(
            (item) => item.name === action.payload.status
          );
          if (
            !activeBoard.columns[newNum].tasks.includes(action.payload.task)
          ) {
            activeBoard.columns[newNum].tasks.push(action.payload.task);
          }
        } else {
          activeBoard.columns[index].tasks[action.payload.i] = {
            title: action.payload.title,
            description: action.payload.description,
            subtasks: cleanSubtasks,
            status: action.payload.status,
          };
        }
        return activeBoard;
      };
      return {
        ...state,
        activeBoard: saveTask(),
      };
    case 'DELETE BOARD':
      const deleteBoard = (): Board[] => {
        state.boards = state.boards.filter((board) => board !== activeBoard);
        return state.boards;
      };
      return {
        ...state,
        boards: deleteBoard(),
        activeBoard: state.boards[0],
      };
    case 'DELETE TASK':
      const deleteTask = (): Board => {
        const colNum = activeBoard.columns.findIndex(
          (item) => item.name === action.payload.column.name
        );
        activeBoard.columns[colNum].tasks = activeBoard.columns[
          colNum
        ].tasks.filter((item) => item !== action.payload.task);
        return activeBoard;
      };
      return {
        ...state,
        activeBoard: deleteTask(),
      };
  }
  return { ...state, boards: state.boards };
};

export default reducer;
