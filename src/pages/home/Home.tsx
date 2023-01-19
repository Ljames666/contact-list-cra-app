import { Box, IconButton, Divider, Grid, TextField, Button } from '@mui/material';
import CardContact, { CardProps } from '../../components/card-contact/CardContact';
import { AppRoutes } from '../../routes/RoutesApp';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect } from 'react';
import getStorages from '../../utils/functions/storage/getStorage';
import { v4 } from 'uuid';
import setStorages from '../../utils/functions/storage/setStorage';
import removeStorage from '../../utils/functions/storage/removeStorage';

type HomeProps = {
    homeState: string;
};
const Main = styled(Box)(() => ({
    width: '100vw',
    marginTop: '5%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

function Home({ homeState }: HomeProps) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [contacts, setContacts] = useState<CardProps[]>([]);
    const [searchContacts, setSearchContacts] = useState<CardProps[]>([]);

    const storage = getStorages('contactList');
    const searchInStorage = getStorages('searchedContacts');

    useEffect(() => {
        setContacts(storage);
    }, [contacts]);

    useEffect(() => {
        setSearchContacts(searchInStorage);
    }, [searchContacts]);

    useEffect(() => {
        if (homeState) {
            const search = storage.filter(
                (element) =>
                    element.name.includes(homeState) ||
                    element.phone.includes(homeState) ||
                    element.email.includes(homeState) ||
                    element.address.includes(homeState)
            );
            setSearchContacts(search);
            setStorages('searchedContacts', search);
        } else {
            setSearchContacts([]);
            setStorages('searchedContacts', []);
        }
    }, [homeState]);

    const handleSubmit = () => {
        const contact = {
            id: v4(),
            name,
            email,
            phone,
            address,
        };
        storage.push(contact);
        setContacts([...contacts, contact]);
        setStorages('contactList', storage);
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
        removeStorage('searchedContacts');
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
                        }}
                    >
                        <TextField
                            id="input-name"
                            label="Nome"
                            variant="outlined"
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
                            id="input-email"
                            label="Email"
                            variant="outlined"
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
                            id="input-telefone"
                            label="Telefone"
                            variant="outlined"
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
                            id="input-endereco"
                            label="Endereço"
                            variant="outlined"
                            focused
                            sx={{ margin: '0 2px' }}
                            value={address}
                            InputProps={{
                                sx: { color: '#1976d2' },
                            }}
                            onKeyDown={(e) => nextInput(e)}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <IconButton color="primary" size="large" onClick={handleSubmit}>
                            <SendIcon fontSize="large" />
                        </IconButton>
                    </Box>

                    {contacts.length && (
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {searchContacts.length ? (
                                <>
                                    <Box>
                                        <Button variant="contained" onClick={handleClearSearch}>
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
                    )}
                </Grid>
            </Grid>
        </Main>
    );
}

export default Home;
