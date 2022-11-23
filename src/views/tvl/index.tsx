import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Container from '../../components/container';
import ProtocolModal from './components/protocol_modal';
import PoolModal from './components/pool_modal';

const useStyles = makeStyles((theme: any) => ({
    root: {
        color: 'white',
        '& > h2': {
            fontSize: '56px',
            fontWeight: 700,
            lineHeight: '70px',
            paddingBottom: '25px',
        },
        '& h6': {
            fontSize: '18px',
            fontWeight: '500',
            opacity: '0.5',
        },
        '& .protocol_card': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '30px',
            margin: '40px 0',
            flexWrap: 'wrap',
        },
    },
    divide_line: {
        background: 'white',
        height: '1px',
        opacity: '.5',
    },
    gradient__back: {
        position: 'absolute',
        top: '5px',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(104.45deg, #6452DE 0%, #F76CC5 73.89%, #FF6F6F 112.74%)',
        zIndex: '-1',
        borderRadius: '10px',
    },
}));

export default function TVL() {
    const classes = useStyles();

    const protocolData = ['Uniswap V2 pools TVL', 'Sushiswap pools TVL', 'Curve pools TVL'];
    const poolData = [
        '818,768.67',
        '818,768.67',
        '818,768.67',
        '818,768.67',
        '818,768.67',
        '818,768.67',
        '818,768.67',
        '818,768.67',
        '818,768.67',
    ];

    return (
        <Container>
            <Box className={classes.root}>
                <Typography variant="h2">Pool TVL</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px 0' }}>
                    <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>Protocol TVL</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                        <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="subtitle1">Protocol pools TVL</Typography>
                            <Typography variant="h5">$4,558,529.50</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="subtitle1">Protocol positions</Typography>
                            <Typography variant="h5">234</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.divide_line} />
                <Box className={'protocol_card'}>
                    {protocolData.map((item: any, index: number) => (
                        <ProtocolModal title={item} key={index} />
                    ))}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px 0' }}>
                    <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>Pool TVL</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                        <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="subtitle1">Protocol pools TVL</Typography>
                            <Typography variant="h5">$4,558,529.50</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="subtitle1">Protocol positions</Typography>
                            <Typography variant="h5">234</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.divide_line} />
                <Grid container justifyContent="space-between" alignItems={'center'} sx={{ marginTop: '40px' }}>
                    {poolData.map((item: any, index: number) => (
                        <PoolModal title={item} key={index} />
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}
