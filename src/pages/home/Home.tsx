import { Box, IconButton, Grid, TextField, Button, Typography } from '@mui/material';
import CardContact from '../../components/card-contact/CardContact';

import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import ModalShow from '../../components/modal-show/ModalShow';
import { useDispatch, useSelector } from 'react-redux';
import { Contato, addContato, contatoSelectAll } from '../../store/contatosSlice';
import { AppDispatch } from '../../store';

const Main = styled(Box)(() => ({
    width: '100vw',
    marginTop: '5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
type HomeProps = {
    homeState: string;
};

function Home({ homeState }: HomeProps) {
    const dispatch: AppDispatch = useDispatch();

    /* abaixo carregamos o estado de contatos pra uso,contatoSelectAll é variavel da linha 35 
    lá no contatos Slice, se não fizer assim deve usar o useSelector assim:
     *** = useSelector((state)=>state.nomedoreducer)*/
    const contatosRedux = useSelector(contatoSelectAll);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [contacts, setContacts] = useState<Contato[]>([]);
    const [searchContacts, setSearchContacts] = useState<Contato[]>([]);

    useEffect(() => {
        setContacts(contatosRedux.listaContatos);
    }, [contatosRedux.listaContatos]);
    // TODO: vai continuar a refatoração na terça
    // useEffect(() => {
    //     setSearchContacts();
    // }, [searchContacts]);

    useEffect(() => {
        if (homeState) {
            const search = contatosRedux.listaContatos.filter(
                (element) =>
                    element.name.includes(homeState) ||
                    element.phone.includes(homeState) ||
                    element.email.includes(homeState) ||
                    element.address.includes(homeState)
            );
            setSearchContacts(search);
        } else {
            setSearchContacts([]);
        }
    }, [contatosRedux.listaContatos, homeState]);

    const handleSubmit = () => {
        const contact = {
            id: v4(),
            name,
            email,
            phone,
            address,
        };
        dispatch(addContato(contact));
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
    };

    const nextInput = (e: any, name?: string) => {
        const { key } = e;
        if (key === 'Enter') {
            e.preventDefault();
            if (name) {
                const newInput = document.querySelector(`#${name}`);
                // @ts-ignore
                if (newInput) newInput.focus();
            } else {
                handleSubmit();
            }
        }
    };
    const handleClearSearch = () => {
        setSearchContacts([]);
    };
    return (
        <Main>
            <Grid container xs={8}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'rgba(255,255,255,0.7)',
                            borderRadius: '10px',
                            padding: 2,
                            margin: '10px 0px',
                        }}>
                        <TextField
                            id='input-name'
                            label='Nome'
                            variant='outlined'
                            focused
                            sx={{ margin: '0 2px' }}
                            value={name}
                            InputProps={{
                                sx: { color: '#1976d2' },
                            }}
                            onKeyDown={(e) => nextInput(e, 'input-email')}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            id='input-email'
                            label='Email'
                            variant='outlined'
                            focused
                            sx={{ margin: '0 2px' }}
                            value={email}
                            InputProps={{
                                sx: { color: '#1976d2' },
                            }}
                            onKeyDown={(e) => nextInput(e, 'input-telefone')}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            id='input-telefone'
                            label='Telefone'
                            variant='outlined'
                            focused
                            sx={{ margin: '0 2px' }}
                            value={phone}
                            InputProps={{
                                sx: { color: '#1976d2' },
                            }}
                            onKeyDown={(e) => nextInput(e, 'input-endereco')}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <TextField
                            id='input-endereco'
                            label='Endereço'
                            variant='outlined'
                            focused
                            sx={{ margin: '0 2px' }}
                            value={address}
                            InputProps={{
                                sx: { color: '#1976d2' },
                            }}
                            onKeyDown={(e) => nextInput(e)}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <IconButton color='primary' size='large' onClick={handleSubmit}>
                            <SendIcon fontSize='large' />
                        </IconButton>
                    </Box>

                    {contacts.length ? (
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            {searchContacts.length ? (
                                <>
                                    <Box>
                                        <Button variant='contained' onClick={handleClearSearch}>
                                            Apagar Pesquisa
                                        </Button>
                                    </Box>
                                    {searchContacts.map((contact) => (
                                        <Grid item>
                                            <CardContact
                                                id={contact.id}
                                                name={contact.name}
                                                email={contact.email}
                                                phone={contact.phone}
                                                address={contact.address}
                                            />
                                        </Grid>
                                    ))}
                                </>
                            ) : (
                                contacts.map((contact) => (
                                    <Grid item>
                                        <CardContact
                                            id={contact.id}
                                            name={contact.name}
                                            email={contact.email}
                                            phone={contact.phone}
                                            address={contact.address}
                                        />
                                    </Grid>
                                ))
                            )}
                        </Grid>
                    ) : (
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                color: 'whitesmoke',
                                marginTop: 10,
                            }}>
                            <Typography variant='h4'>Adicione seu primeiro contato</Typography>
                        </Box>
                    )}
                </Grid>
            </Grid>
            <ModalShow />
        </Main>
    );
}

export default Home;
