import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

import a from '../../../asset/icons/crypto-ethereum.png';
import b from '../../../asset/icons/crypto-usdc.png';

export default function PoolModal(props: any) {
    const { title } = props;

    return (
        <Grid item xs={12} md={6} lg={4} sx={{ p: 2 }}>
            <Box
                sx={{
                    background: '#342D55',
                    position: 'relative',
                    padding: '30px 50px',
                    borderRadius: '13px',
                }}
            >
                <Typography variant="subtitle1">Liquidity Providing</Typography>
                <Box sx={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={a} alt="" />
                        <img src={b} alt="" style={{ marginLeft: '-15px' }} />
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
