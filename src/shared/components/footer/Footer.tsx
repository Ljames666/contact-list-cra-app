import { Typography } from '@mui/material';

function Footer(props: { texto: string }) {
    return <Typography variant="h6">{props.texto}</Typography>;
}

export default Footer;
