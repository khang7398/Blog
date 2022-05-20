import { createContext, useEffect, useReducer } from 'react';
import Reducer from './Reducer';

const initial = {
  user: JSON.parse(localStorage.getItem('user') || ''),
  isFetching: false,
  error: false,
  dispatch: {},
};

export const Context = createContext(initial);

export const ContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(Reducer, initial);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
