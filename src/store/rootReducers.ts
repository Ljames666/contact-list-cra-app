import { combineReducers } from '@reduxjs/toolkit';
import contato from './contatosSlice';

const reducer = {
    contato,
};

const rootReducers = combineReducers({
    ...reducer,
});

export type AppState = ReturnType<typeof rootReducers>;
export default rootReducers;
