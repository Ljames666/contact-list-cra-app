import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';

type PropsCardIcon = {
    icon: ReactElement;
    title: string;
    txt: string;
};

const StyledCard = styled(Card)(({ theme }) => ({
    background: 'linear-gradient(214.02deg, #EA5F5F 6.04%, #EEAA55 92.95%)',
    boxShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '50px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

function CardIcon({ icon, title, txt }: PropsCardIcon) {
    return (
        <StyledCard sx={{ minWidth: 275 }}>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem',
                }}
            >
                {icon}
                <Typography variant="h5" component="div">
                    {title}
                </Typography>

                <Typography variant="body2">{txt}</Typography>
            </CardContent>
        </StyledCard>
    );
}

export default CardIcon;
