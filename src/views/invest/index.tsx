import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Container from '../../components/container';
import Part1 from './components/part1';
import Part2 from './components/part2';
import Part3 from './components/part3';
import Part4 from './components/part4';

import a from '../../asset/icons/Aptos.png';
import b from '../../asset/icons/crypto-usdc.png';

const useStyles = makeStyles((theme: any) => ({
    root: {
        color: 'white',
        '& h6': {
            fontSize: '18px',
            fontWeight: 500,
            opacity: '.6',
        },
        '& .header': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            '@media(max-width: 960px)': {
                flexDirection: 'column',
                gap: 20,
                textAlign: 'center',
            },
        },
        '& .content': {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginTop: '20px',
            flexWrap: 'wrap',
            gap: '20px',
            '& .MuiSwitch-thumb': {
                background: 'linear-gradient(93.41deg, #6452DE 0.68%, #F76CC5 53.61%, #FF6F6F 103.74%)',
            },
            '& .MuiSlider-thumbColorPrimary': {
                display: 'none',
            },
            '& .modal4': {
                padding: '40px',
                background: '#342D55',
                borderRadius: '15px',
            },
        },
    },
    devideLine: {
        background: 'white',
        height: '1px',
        opacity: '.5',
        margin: '20px 0',
    },
}));

export default function Invest() {
    const classes = useStyles();

    return (
        <Container>
            <Box className={classes.root}>
                <Box className={'header'}>
                    <Stack direction={'column'} justifyContent="center" gap={1}>
                        <Stack direction={'row'} alignItems="center" gap={2}>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                sx={{ '& img': { width: '40px', height: '40px' } }}
                            >
                                <img src={a} alt="" />
                                <img src={b} alt="" style={{ marginLeft: '-15px' }} />
                            </Stack>
                            <Typography variant="h4">Aptos/USDC</Typography>
                        </Stack>
                        <Typography variant="subtitle1">Yield farming on Sushiswap</Typography>
                    </Stack>
                    <Stack
                        direction={'row'}
                        alignItems="center"
                        gap={6}
                        sx={{
                            '@media(max-width: 650px)': {
                                flexDirection: 'column',
                                gap: 1,
                                textAlign: 'center',
                            },
                        }}
                    >
                        <Box>
                            <Typography variant="subtitle1">Positions</Typography>
                            <Typography variant="h5">9</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle1">TVL via Homora V2</Typography>
                            <Typography variant="h5">$5,435.43</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle1">TVL on Sushiswap</Typography>
                            <Typography variant="h5">$12,422,434.54</Typography>
                        </Box>
                    </Stack>
                </Box>
                <Box className={'content'}>
                    <Box
                        sx={{
                            flex: '3',
                            minWidth: '540px',
                            '@media(max-width: 600px)': {
                                minWidth: 'unset',
                                width: '100%',
                            },
                        }}
                    >
                        <Part1 />
                        <Part2 />
                        <Part3 />
                    </Box>
                    <Box
                        sx={{
                            flex: '2',
                            minWidth: '450px',
                            '@media(max-width: 600px)': {
                                minWidth: 'unset',
                                width: '100%',
                            },
                        }}
                    >
                        <Part4 />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
