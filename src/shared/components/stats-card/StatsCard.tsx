import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Diversity3Icon from '@mui/icons-material/Diversity3';

interface StatsCardProps {
    customers: number;
    awards: number;
    feedbacks: number;
}

const Container = styled(Box)(() => ({
    background: 'linear-gradient(214.02deg, #EA5F5F 6.04%, #EEAA55 92.95%)',
    borderRadius: '25px',
    padding: '1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
}));

const StatsCard: React.FC<StatsCardProps> = ({ customers, awards, feedbacks }) => {
    return (
        <Container>
            <Box sx={{ borderRight: '2px solid rgba(255,255,255,0.5)', padding: '0 2rem' }}>
                <StarIcon fontSize="large" />
                <Typography variant="h5" component="p" sx={{ fontWeight: 'bold' }}>
                    {awards} National
                </Typography>
                <Typography variant="h5" component="p">
                    Awards
                </Typography>
            </Box>
            <Box sx={{ borderRight: '2px solid rgba(255,255,255,0.5)', padding: '0 2rem' }}>
                <Diversity3Icon fontSize="large" />
                <Typography variant="h5" component="p" sx={{ fontWeight: 'bold' }}>
                    {customers}+ Happy
                </Typography>
                <Typography variant="h5" component="p">
                    Customers
                </Typography>
            </Box>
            <Box sx={{ padding: '0 2rem' }}>
                <FavoriteIcon fontSize="large" />
                <Typography variant="h5" component="p" sx={{ fontWeight: 'bold' }}>
                    {feedbacks}+ Lovely
                </Typography>
                <Typography variant="h5" component="p">
                    Feedbacks
                </Typography>
            </Box>
        </Container>
    );
};

export default StatsCard;
