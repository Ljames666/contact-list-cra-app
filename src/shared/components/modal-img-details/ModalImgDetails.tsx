/* eslint-disable jsx-a11y/img-redundant-alt */
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Dispatch, SetStateAction } from 'react';

interface IPropsModal {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    imageUrl: string;
    txt: string;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '20px',
    // boxShadow: 24,
    p: 4,
};

const imageCss = {
    borderRadius: '10px',
    overflow: 'hidden',
    width: '100%',
    objectFit: 'cover',
};

function ModalImgDetails({ open, setOpen, imageUrl, txt }: IPropsModal) {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper elevation={8} sx={{ borderRadius: '2rem' }}>
                    <Box sx={style}>
                        <Box sx={imageCss}>
                            <img src={imageUrl} alt="image" height="100%" />
                        </Box>
                        <Box>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {txt}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Modal>
        </div>
    );
}

export default ModalImgDetails;
