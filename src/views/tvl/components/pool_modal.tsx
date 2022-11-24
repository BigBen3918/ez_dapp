import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

export default function PoolModal(props: any) {
    const { title, imga, imgb } = props;

    return (
        <Grid item xs={12} md={6} lg={4} sx={{ p: 2 }}>
            <Box
                sx={{
                    background: '#342D55',
                    position: 'relative',
                    padding: '30px',
                    borderRadius: '13px',
                    '@media(max-width: 350px)': {
                        width: '100%',
                        padding: '20px',
                    },
                }}
            >
                <Typography variant="subtitle1">Liquidity Providing</Typography>
                <Box sx={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& img': {
                                width: '35px',
                                height: '35px',
                                borderRadius: '50%',
                            },
                        }}
                    >
                        <img src={imga} alt="" />
                        <img src={imgb} alt="" style={{ marginLeft: '-15px' }} />
                    </Box>
                    <Box
                        sx={{
                            '& h5': {
                                fontSize: '18px',
                                fontWeight: 500,
                            },
                        }}
                    >
                        <Typography variant="h5">UNI/ETH</Typography>
                        <Typography variant="h5">Uniswap V2</Typography>
                    </Box>
                </Box>
                <Typography variant="subtitle1">TVL</Typography>
                <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                    ${title}
                </Typography>
                <Typography variant="subtitle1">Positions</Typography>
                <Typography variant="h5">114</Typography>
            </Box>
        </Grid>
    );
}
