import React from 'react';
import { Box, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Container from '../../components/container';
import PoolCard from './components/PoolCard';

import EthereumIcon from '../../asset/icons/crypto-ethereum.png';
import DaiIcon from '../../asset/icons/crypto-dai.svg';

const useStyles = makeStyles((theme: any) => ({
    part1: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '50px',
        color: '#FFF',
        gap: '20px',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            justifyContent: 'center',
        },
        '& h1': {
            fontSize: '56px',
            fontWeight: '700',
            lineHeight: '70px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '35px',
            },
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
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
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
            minWidth: '170px',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
    },
}));

function Farm() {
    const classes = useStyles();
    const [alignment, setAlignment] = React.useState<string>('1');

    const testPool: any = [
        {
            aTokenIcon: DaiIcon,
            bTokenIcon: EthereumIcon,
            pool_count: '3pools',
            pool_total: '$787,867,934.61',
            from_multi: '1.00x',
            from_percent: '0.46%',
            max_apr: '0.46%',
            trade_fee: '0.16%',
            borrow: '-0.00%',
            position: '10',
            acheive: '1.00X',
            farm_apr: '0.16%',
            trade_volume: '$60,795,345.28',
            tvl: '$118,319.89',
        },
        {
            aTokenIcon: DaiIcon,
            bTokenIcon: EthereumIcon,
            pool_count: '3pools',
            pool_total: '$787,867,934.61',
            from_multi: '1.00x',
            from_percent: '0.46%',
            max_apr: '0.46%',
            trade_fee: '0.16%',
            borrow: '-0.00%',
            position: '10',
            acheive: '1.00X',
            farm_apr: '0.16%',
            trade_volume: '$60,795,345.28',
            tvl: '$118,319.89',
        },
        {
            aTokenIcon: DaiIcon,
            bTokenIcon: EthereumIcon,
            pool_count: '3pools',
            pool_total: '$787,867,934.61',
            from_multi: '1.00x',
            from_percent: '0.46%',
            max_apr: '0.46%',
            trade_fee: '0.16%',
            borrow: '-0.00%',
            position: '10',
            acheive: '1.00X',
            farm_apr: '0.16%',
            trade_volume: '$60,795,345.28',
            tvl: '$118,319.89',
        },
        {
            aTokenIcon: DaiIcon,
            bTokenIcon: EthereumIcon,
            pool_count: '3pools',
            pool_total: '$787,867,934.61',
            from_multi: '1.00x',
            from_percent: '0.46%',
            max_apr: '0.46%',
            trade_fee: '0.16%',
            borrow: '-0.00%',
            position: '10',
            acheive: '1.00X',
            farm_apr: '0.16%',
            trade_volume: '$60,795,345.28',
            tvl: '$118,319.89',
        },
        {
            aTokenIcon: DaiIcon,
            bTokenIcon: EthereumIcon,
            pool_count: '3pools',
            pool_total: '$787,867,934.61',
            from_multi: '1.00x',
            from_percent: '0.46%',
            max_apr: '0.46%',
            trade_fee: '0.16%',
            borrow: '-0.00%',
            position: '10',
            acheive: '1.00X',
            farm_apr: '0.16%',
            trade_volume: '$60,795,345.28',
            tvl: '$118,319.89',
        },
        {
            aTokenIcon: DaiIcon,
            bTokenIcon: EthereumIcon,
            pool_count: '3pools',
            pool_total: '$787,867,934.61',
            from_multi: '1.00x',
            from_percent: '0.46%',
            max_apr: '0.46%',
            trade_fee: '0.16%',
            borrow: '-0.00%',
            position: '10',
            acheive: '1.00X',
            farm_apr: '0.16%',
            trade_volume: '$60,795,345.28',
            tvl: '$118,319.89',
        },
        {
            aTokenIcon: DaiIcon,
            bTokenIcon: EthereumIcon,
            pool_count: '3pools',
            pool_total: '$787,867,934.61',
            from_multi: '1.00x',
            from_percent: '0.46%',
            max_apr: '0.46%',
            trade_fee: '0.16%',
            borrow: '-0.00%',
            position: '10',
            acheive: '1.00X',
            farm_apr: '0.16%',
            trade_volume: '$60,795,345.28',
            tvl: '$118,319.89',
        },
        {
            aTokenIcon: DaiIcon,
            bTokenIcon: EthereumIcon,
            pool_count: '3pools',
            pool_total: '$787,867,934.61',
            from_multi: '1.00x',
            from_percent: '0.46%',
            max_apr: '0.46%',
            trade_fee: '0.16%',
            borrow: '-0.00%',
            position: '10',
            acheive: '1.00X',
            farm_apr: '0.16%',
            trade_volume: '$60,795,345.28',
            tvl: '$118,319.89',
        },
        {
            aTokenIcon: DaiIcon,
            bTokenIcon: EthereumIcon,
            pool_count: '3pools',
            pool_total: '$787,867,934.61',
            from_multi: '1.00x',
            from_percent: '0.46%',
            max_apr: '0.46%',
            trade_fee: '0.16%',
            borrow: '-0.00%',
            position: '10',
            acheive: '1.00X',
            farm_apr: '0.16%',
            trade_volume: '$60,795,345.28',
            tvl: '$118,319.89',
        },
    ];

    return (
        <Container>
            <Box className={classes.part1}>
                <Box>
                    <Typography variant="h1">FarmPools</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: { sm: '100px', xs: '10px' },
                        flexDirection: {
                            sm: 'row',
                            xs: 'column',
                        },
                    }}
                >
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

            {/* Pool Component */}
            <Box>
                {testPool.map((pool: any, index: number) => (
                    <PoolCard key={index} poolInfo={pool} />
                ))}
            </Box>
        </Container>
    );
}

export default Farm;
