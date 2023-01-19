import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { CardProps } from '../card-contact/CardContact';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: 'rgba(255,255,255,0.7)',
    borderRadius: '10px',
    boxShadow: 24,
    p: 2,
};

export default function ModalShow() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [contacts, setContacts] = useState<CardProps[]>([]);
    const [searchContacts, setSearchContacts] = useState<CardProps[]>([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = () => {
        const contact = {
            name,
            email,
            phone,
            address,
        };

        setContacts([...contacts, contact]);

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
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box sx={style}>
                <TextField
                    id='input-name'
                    label='Nome'
                    variant='outlined'
                    focused
                    sx={{ margin: '8px 0', width: '100%' }}
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
                    sx={{ margin: '8px 0', width: '100%' }}
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
                    sx={{ margin: '8px 0', width: '100%' }}
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
                    sx={{ margin: '8px 0', width: '100%' }}
                    value={address}
                    InputProps={{
                        sx: { color: '#1976d2' },
                    }}
                    onKeyDown={(e) => nextInput(e)}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                    }}>
                    <IconButton color='success' size='large' onClick={handleSubmit}>
                        <CheckIcon fontSize='large' />
                    </IconButton>
                    <IconButton color='error' size='large' onClick={handleSubmit}>
                        <CloseIcon fontSize='large' />
                    </IconButton>
                </Box>
            </Box>
        </Modal>
    );
}
