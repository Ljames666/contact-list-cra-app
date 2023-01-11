/* eslint-disable jsx-a11y/img-redundant-alt */
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import { useState } from 'react';
import ModalImgDetails from '../modal-img-details/ModalImgDetails';

type PropsCardImage = {
    imageUrl: string;
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
    overflow: 'hidden',
    minWidth: 275,
    cursor: 'pointer',
}));

function CardImage({ imageUrl, txt }: PropsCardImage) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <>
            <StyledCard onClick={handleOpen}>
                <img src={imageUrl} alt="image" height="100%" />
            </StyledCard>
            <ModalImgDetails open={open} setOpen={setOpen} imageUrl={imageUrl} txt={txt} />
        </>
    );
}

export default CardImage;
