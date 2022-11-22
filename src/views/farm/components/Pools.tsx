import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

import PoolCard, { IPoolCard } from './PoolCard';

import ArcoIcon from '../../../asset/icons/arco.svg';
import AptosIcon from '../../../asset/icons/Aptos.png';
import BtcIcon from '../../../asset/icons/crypto-btc.svg';
import UsdcIcon from '../../../asset/icons/crypto-usdc.png';
import UsdtIcon from '../../../asset/icons/crypto-usdt.png';
import EthereumIcon from '../../../asset/icons/crypto-ethereum.png';
import DaiIcon from '../../../asset/icons/crypto-dai.svg';

const useStyles = makeStyles((theme) => ({
    poolsView: {
        padding: '0 50px 20px',
        [theme.breakpoints.down('md')]: {
            padding: '0 20px 20px',
        },
    },
})) as any;

function Pools() {
    const classes = useStyles();
    const [pools, setPools] = useState<Array<IPoolCard> | null>(null);

    useEffect(() => {
        const testPool: Array<IPoolCard> = [
            {
                aTokenIcon: AptosIcon,
                bTokenIcon: ArcoIcon,
                text: 'APT/ARC',
                apy: 0,
                tvl: 0,
                userStake: 0,
                dailyReturn: '0',
                totalStaked: '0',
                lpPrice: 0,
                apr: 0,
            },
            {
                aTokenIcon: AptosIcon,
                bTokenIcon: BtcIcon,
                text: 'APT/BTC',
                apy: 0,
                tvl: 0,
                userStake: 0,
                dailyReturn: '0',
                totalStaked: '0',
                lpPrice: 0,
                apr: 0,
            },
            {
                aTokenIcon: AptosIcon,
                bTokenIcon: EthereumIcon,
                text: 'APT/ETH',
                apy: 0,
                tvl: 0,
                userStake: 0,
                dailyReturn: '0',
                totalStaked: '0',
                lpPrice: 0,
                apr: 0,
            },
            {
                aTokenIcon: AptosIcon,
                bTokenIcon: DaiIcon,
                text: 'APT/DAI',
                apy: 0,
                tvl: 0,
                userStake: 0,
                dailyReturn: '0',
                totalStaked: '0',
                lpPrice: 0,
                apr: 0,
            },
            {
                aTokenIcon: AptosIcon,
                bTokenIcon: UsdcIcon,
                text: 'APT/USDC',
                apy: 0,
                tvl: 0,
                userStake: 0,
                dailyReturn: '0',
                totalStaked: '0',
                lpPrice: 0,
                apr: 0,
            },
            {
                aTokenIcon: AptosIcon,
                bTokenIcon: UsdtIcon,
                text: 'APT/USDT',
                apy: 0,
                tvl: 0,
                userStake: 0,
                dailyReturn: '0',
                totalStaked: '0',
                lpPrice: 0,
                apr: 0,
            },
        ];
        if (pools) {
            setPools([...pools, ...testPool]);
        } else {
            setPools([...testPool]);
        }
    }, []);

    return (
        <div className={classes.poolsView}>
            {pools?.map((pool, index) => (
                <PoolCard key={index} poolInfo={pool} />
            ))}
        </div>
    );
}

export default Pools;
