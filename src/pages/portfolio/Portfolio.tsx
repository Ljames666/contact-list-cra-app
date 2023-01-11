import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import dataImages from '../../shared/data/dataImages';
import CardImage from '../../shared/components/card-image/CardImage';
import StatsCard from '../../shared/components/stats-card/StatsCard';

const StyledPortifolio = styled(Box)(() => ({
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    maxWidth: '1097px',
    margin: '1.5rem auto',
    color: 'white',
}));

function Portfolio() {
    return (
        <StyledPortifolio component="section">
            <Typography variant="h2" mt={2} mb={1}>
                Latest Portfolio
            </Typography>
            <Typography variant="body1" color="#757575" mb={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis rem harum
                cumque, quibusdam reiciendis voluptate et vel rerum ut quia beatae quae placeat
                pariatur tenetur laudantium mollitia dolores perspiciatis.
            </Typography>

            <Grid container spacing={2} mb={2}>
                {dataImages.map((service) => (
                    <Grid item xs={4}>
                        <CardImage imageUrl={service.imageUrl} txt={service.txt} />
                    </Grid>
                ))}
            </Grid>

            <StatsCard customers={1500} awards={15} feedbacks={2700} />
        </StyledPortifolio>
    );
}

export default Portfolio;
