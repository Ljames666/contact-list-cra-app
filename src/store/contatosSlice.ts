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
    // criado aqui para não poluir no slice
    loading: false,
    showModal: {
        open: false,
        type: undefined,
    },
    listaContatos: [],
};

// armazena a chamado do estado em variavel pra facilitar o uso no useSelector
export const contatoSelectAll = (state: AppState) => state.contato;

// esse é o pradão para todo slice é um objeto {name,intialState,reducers,extraReducers}
const contatoSlice = createSlice({
    name: 'contatos',
    initialState, // foi criado na linha 24
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

export const { clearState, addContato } = contatoSlice.actions; // exporta as ações(metodos) do reducer (linha 41)
export default contatoSlice.reducer;
