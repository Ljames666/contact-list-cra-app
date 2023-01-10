import { styled } from '@mui/material/styles';
import CardIcon from '../../shared/components/card-icon/CardIcon';
import { Typography, Grid, Box } from '@mui/material';
import dataService from '../../shared/data/dataService';

const StyledService = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1097px',
    margin: '1.5rem auto',
    color: 'white',
}));

function Service() {
    return (
        <StyledService component="section">
            <Typography variant="h2" mt={2} mb={2}>
                My Best Services
            </Typography>

            <Grid container spacing={2}>
                {dataService.map((service) => (
                    <Grid item xs={4}>
                        <CardIcon icon={service.icon} title={service.title} txt={service.txt} />
                    </Grid>
                ))}
            </Grid>
        </StyledService>
    );
}

export default Service;
