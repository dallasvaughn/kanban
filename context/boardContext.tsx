import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import reducer from './boardReducer';

type Props = {
  children: ReactNode;
};

interface Task {
  title: string;
  description: string;
  status: string;
  subtasks?: { title: string; isCompleted: boolean }[];
}

export interface Column {
  name: string;
  tasks?: Task[];
}

interface Board {
  name: string;
  columns?: Column[];
}

export interface State {
  boards: Board[];
}

export interface Action {
  type: string;
  payload?: any;
}

const initialState = {
  boards: [],
};

const initialDispatch = () => {
  return;
};

export const BoardContext = createContext<[State, Dispatch<Action>]>([
  initialState,
  initialDispatch,
]);

export const BoardProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BoardContext.Provider value={[state, dispatch]}>
      {children}
    </BoardContext.Provider>
  );
};
