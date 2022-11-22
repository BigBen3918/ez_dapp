import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Container from '../../components/container';
import { Common_FillButton } from '../../components/button';

import notExist from '../../asset/icons/not_exist.png';

const useStyles = makeStyles((theme: any) => ({
    root: {
        color: 'white',
        '& > h2': {
            fontSize: '56px',
            fontWeight: 700,
            lineHeight: '70px',
            paddingBottom: '25px',
        },
        '& .devideLine': {
            background: 'white',
            height: '1px',
            opacity: '.5',
        },
        '& .modal': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            '& h6': {
                fontSize: '18px',
                opacity: '.6',
            },
            '& > div:first-child': {
                flex: '1 1 50%',
                background: '#342D55',
                borderRadius: '13px',
                '& > div:first-child': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '50px',
                    '& h4': {
                        fontSize: '40px',
                        fontWeight: 700,
                    },
                },
                '& > div:last-child': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '30px 50px',
                    '& p': {
                        fontSize: '18px',
                        fontWeight: 500,
                    },
                },
            },
            '& > div:last-child': {
                flex: '1 1 50%',
                background: '#342D55',
                borderRadius: '13px',
                '& > div:first-child': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '30px 50px',
                },
                '& > div:last-child': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '50px',
                    textAlign: 'center',
                    '& h4': {
                        fontSize: '32px',
                        fontWeight: 600,
                    },
                },
            },
        },
        '& .positions': {
            borderRadius: '13px',
            marginTop: '50px',
            background: '#342D55',
            '& h6': {
                padding: '50px',
                fontSize: '18px',
                fontWeight: '500',
            },
        },
    },
}));

export default function Position() {
    const classes = useStyles();

    return (
        <Container>
            <Box className={classes.root}>
                <Typography variant="h2">Your Position</Typography>
                <Box className="modal">
                    <Box>
                        <Box>
                            <Box>
                                <Typography variant="subtitle1">Claimable ALPHA Rewards</Typography>
                                <Typography variant="h4">0.00 ALPHA</Typography>
                            </Box>
                            <Common_FillButton content="Claim & Stake" />
                        </Box>
                        <Box className="devideLine" />
                        <Box>
                            <Typography variant="subtitle1">Pending ALPHA Rewards</Typography>
                            <Typography variant="body1">~0.00 ALPHA</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Typography variant="subtitle1">Your Info</Typography>
                            <Typography variant="h4">
                                <AccountCircleIcon />
                            </Typography>
                        </Box>
                        <Box className="devideLine" />
                        <Box>
                            <Box>
                                <Typography variant="subtitle1">Total Position Value</Typography>
                                <Typography variant="h4">$0.00</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1">Total Equity Value</Typography>
                                <Typography variant="h4">$0.00</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1">Total Debt Value</Typography>
                                <Typography variant="h4">$0.00</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="positions">
                    <Typography variant="subtitle1">Your positions</Typography>
                    <Box className="devideLine" />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 10,
                            '& img': {
                                sm: { width: '30%' },
                                md: { width: '150px' },
                            },
                        }}
                    >
                        <img src={notExist} alt="" />
                        <Typography variant="h4">You don't have any positions yet</Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
