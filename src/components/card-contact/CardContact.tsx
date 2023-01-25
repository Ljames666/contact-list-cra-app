import * as React from 'react';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Avatar,
    IconButton,
    Typography,
    Card,
    CardContent,
    CardActions,
    Divider,
} from '@mui/material';
import { Contato, setShowModal } from '../../store/contatosSlice';
import { AppDispatch } from '../../store';
import { useDispatch } from 'react-redux';

export default function CardContact({ id, name, email, phone, address }: Contato) {
    const dispatch: AppDispatch = useDispatch();
    const stringToColor = (string: string) => {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    };
    const stringAvatar = (str: string) => {
        return {
            sx: {
                bgcolor: stringToColor(str),
                color: 'whitesmoke',
                border: '3px solid whitesmoke',
                fontWeight: 500,
            },
            children: `${str.split(' ')[0][0].toUpperCase()}${str.split(' ')[0][1].toUpperCase()}`,
        };
    };
    const handleclick = (cId: string, type: string) => {
        dispatch(setShowModal({ open: true, type, id: cId }));
    };
    return (
        <Card
            sx={{
                minWidth: 275,
                color: 'black',
                bgcolor: stringToColor(address),
            }}>
            <CardContent
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                <Avatar {...stringAvatar(name)} />

                <Typography variant='h6' component='div'>
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    {address}
                </Typography>
                <Typography variant='body1'>
                    {phone}
                    <br />
                    {email}
                </Typography>
            </CardContent>
            <Divider />
            <CardActions
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    bgcolor: '#1976d2',
                }}>
                <IconButton color='warning' onClick={() => handleclick(id, 'edit')}>
                    <EditIcon />
                </IconButton>
                <IconButton color='error' onClick={() => handleclick(id, 'delete')}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
