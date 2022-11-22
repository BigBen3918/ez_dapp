import React from 'react';
import { Box, Typography } from '@mui/material';

export default function PoolModal(props: any) {
    const { title } = props;

    return (
        <Box
            sx={{
                flex: '1 1 33.3%',
                background: '#342D55',
                position: 'relative',
                padding: '30px 50px',
                borderRadius: '13px',
            }}
        >
            <Typography variant="subtitle1">Liquidity Providing</Typography>
            <Box sx={{ marginBottom: '20px' }}>$818,768.67</Box>
            <Typography variant="subtitle1">TVL</Typography>
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                $818,768.67
            </Typography>
            <Typography variant="subtitle1">Positions</Typography>
            <Typography variant="h5">114</Typography>
        </Box>
    );
}
