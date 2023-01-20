import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './rootReducers';

export type Contato = {
    // cria o type para que os dado de contatos respeitem essa regra
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
};

type ContatoState = {
    // aqui o type determina como vai ser o estado global de contatos
    loading: boolean; // loading para quando for executado funções assincronas(async)
    showModal: {
        // show modal controla a aparição do modal e o tipo
        open: boolean;
        type: string | undefined;
    };
    listaContatos: Array<Contato>;
};

const initialState: ContatoState = {
    loading: false,
    showModal: {
        open: false,
        type: undefined,
    },
    listaContatos: [],
};
export const contatoSelectAll = (state: AppState) => state.contato;

const contatoSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        clearState: () => initialState, // reducer para voltar ao estado inicial
        addContato: (state, action) => {
            // reducer para add um contato novo
            const payloader: Contato = action.payload;
            state.listaContatos.push(payloader);
        },
    },
    extraReducers: {},
});

export const { clearState, addContato } = contatoSlice.actions;
export default contatoSlice.reducer;
