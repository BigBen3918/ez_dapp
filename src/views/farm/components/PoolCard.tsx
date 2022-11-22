import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
    Typography,
    Box,
    Divider,
    useMediaQuery,
    Button
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
    cardView: {
        '& .MuiTypography-root': {
            color: '#444',
            textAlign: 'center'
        },
        '& .data': {
            [theme.breakpoints.down('md')]: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
            }
        },
        marginBottom: '20px'
    }
})) as any;

export interface IPoolCard {
    aTokenIcon: string,
    bTokenIcon: string,
    text: string,
    apy: number,
    tvl: number,
    userStake: number,
    dailyReturn: string,
    totalStaked: string,
    lpPrice: number,
    apr: number
}

interface IProps {
    poolInfo: IPoolCard
}

function PoolCard(props: IProps) {

    const classes = useStyles();
    const isSm = useMediaQuery('(max-width:768px)');
    const [dropOpen, setDropOpen] = useState(false);
    const {
        aTokenIcon,
        bTokenIcon,
        text,
        apy,
        tvl,
        userStake,
        dailyReturn,
        totalStaked,
        lpPrice,
        apr
    } = props.poolInfo;

    return (
        <div className={classes.cardView}>
            <Box
                sx={{
                    padding: '20px',
                    bgcolor: '#FFF',
                    borderRadius: '20px',
                    boxShadow: '0px 1px 4px #ccc'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            width: { xs: '100%', md: '160px' },
                            mb: 2,
                            '& img': {
                                width: '24px',
                                height: '24px'
                            }
                        }}
                    >
                        <img src={aTokenIcon} />
                        <img src={bTokenIcon} />
                        <Typography sx={{ px: 1 }}>{text}</Typography>
                    </Box>
                    <Box className='data'>
                        <Typography >APY</Typography>
                        <Typography sx={{ fontSize: '24px', minWidth: '60px' }}>-</Typography>
                    </Box>
                    <Box className='data'>
                        <Typography>Total Value Locked</Typography>
                        <Typography sx={{ fontSize: '24px', minWidth: '60px' }}>-</Typography>
                    </Box>
                    <Box className='data'>
                        <Typography>Your Stake</Typography>
                        <Typography sx={{ fontSize: '24px', minWidth: '60px' }}>-</Typography>
                    </Box>
                    <Box className='data'>
                        <Typography>Daily Return</Typography>
                        <Typography sx={{ fontSize: '24px', minWidth: '60px' }}>-</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: '#5361DC',
                            borderRadius: '999px',
                            width: '30px',
                            height: '30px',
                            cursor: 'pointer'
                        }}
                        onClick={() => setDropOpen(!dropOpen)}
                    >
                        {
                            dropOpen ? <KeyboardArrowUpIcon sx={{ color: '#FFF' }} />
                                :
                                <KeyboardArrowDownIcon sx={{ color: '#FFF' }} />
                        }

                    </Box>
                </Box>
                {
                    dropOpen &&
                    <Box >
                        <Divider sx={{ width: '80%', my: 2, mx: 'auto', borderBottomWidth: 3 }} />
                        <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: { xs: 'center', md: 'space-between' },
                                alignItems: 'center',
                                flexDirection: { xs: 'column', md: 'row' }
                            }}
                        >
                            <Box
                                sx={{
                                    '& .MuiBox-root': {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: '160px',
                                        ml: { xs: 0, md: 3 }
                                    },
                                    mb: 2
                                }}
                            >
                                <Box>
                                    <Typography>Total Staked</Typography>
                                    <Typography>{totalStaked}</Typography>
                                </Box>
                                <Box>
                                    <Typography>LP Price</Typography>
                                    <Typography>{lpPrice}</Typography>
                                </Box>
                                <Box>
                                    <Typography>APR</Typography>
                                    <Typography>{apr}</Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    '& .MuiButton-root': {
                                        borderRadius: '20px',
                                        bgcolor: '#5361DC20',
                                        mx: '5px',
                                        height: '40px',
                                        '&:hover': {
                                            bgcolor: '#5361DC',
                                            color: '#FFF'
                                        }
                                    },
                                    '& .zap': {
                                        color: '#FFF',
                                        bgcolor: '#5361DC'
                                    }
                                }}
                            >
                                <Button>Withdraw</Button>
                                <Button>Stake</Button>
                                <Button >Zap</Button>
                            </Box>
                        </Box>
                    </Box>
                }
            </Box>

        </div>
    )
}

export default PoolCard;