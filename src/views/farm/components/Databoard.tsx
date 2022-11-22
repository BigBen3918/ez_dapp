import React from 'react';
import { Box, Typography, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
    part1: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '50px',
        color: '#FFF',
        '& h1': {
            fontSize: '56px',
            fontWeight: '700',
            lineHeight: '70px',
        },
        '& h6': {
            opacity: '.5',
        },
    },
    part2: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '30px 0',
        '& .MuiToggleButtonGroup-root': {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 'unset',
            gap: '10px',
            flexWrap: 'wrap',
        },
        '& .Mui-selected': {
            background: 'linear-gradient(93.41deg, #6452DE 0.68%, #F76CC5 53.61%, #FF6F6F 103.74%)',
        },
        '& button': {
            background: '#342D55',
            borderRadius: '100px !important',
            border: 'none!important',
            padding: '18px 33px',
            color: 'white',
            fontSize: '18px',
        },
    },
}));

function DataBoard() {
    const classes = useStyles();
    const [alignment, setAlignment] = React.useState<string>('1');

    return (
        <>
            <Box className={classes.part1}>
                <Box>
                    <Typography variant="h1">FarmPools</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '100px' }}>
                    <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="subtitle1">Total Positions</Typography>
                        <Typography variant="h5">234 Positions</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="subtitle1">Total Value Locked</Typography>
                        <Typography variant="h5">$30,010,644.92</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.part2}>
                <ToggleButtonGroup value={alignment} exclusive onChange={(e: any) => setAlignment(e.target.value)}>
                    <ToggleButton value="1">All assets</ToggleButton>
                    <ToggleButton value="2">Eth(28)</ToggleButton>
                    <ToggleButton value="3">USDC(28)</ToggleButton>
                    <ToggleButton value="4">DAI(28)</ToggleButton>
                    <ToggleButton value="5">USDT(28)</ToggleButton>
                    <ToggleButton value="6">AAVE(28)</ToggleButton>
                    <ToggleButton value="7">CRV2(28)</ToggleButton>
                    <ToggleButton value="8">DPI(21)</ToggleButton>
                </ToggleButtonGroup>
            </Box>
        </>
    );
}

export default DataBoard;
