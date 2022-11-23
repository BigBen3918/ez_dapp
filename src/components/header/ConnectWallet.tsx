import React, { useState, useContext } from 'react';
import { Web3Context } from '../../context/Web3Context';
// import { makeStyles } from '@mui/styles';
import { Button, Box, Typography, Modal, useMediaQuery } from '@mui/material';

import MartianIcon from '../../asset/icons/Martian.jpg';
import PetraIcon from '../../asset/icons/Petra.jpg';
import { IconX } from '@tabler/icons';
import { formart } from '../../helper/formatAddress';

const modalStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    bgcolor: '#342D55',
    p: 4,
    borderRadius: '13px',
    color: 'white',
};

const wallets = [
    {
        logo: MartianIcon,
        name: 'Martian',
    },
    {
        logo: PetraIcon,
        name: 'Petra',
    },
];

function ConnectButton() {
    const isXs = useMediaQuery('(max-width:350px)');
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false);
    };
    const web3 = useContext(Web3Context);
    const onConnectWallet = async (wallet: string) => {
        await web3?.connect(wallet);
        setOpen(false);
    };
    const userAddress = web3?.address;

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    backgroundImage: 'linear-gradient(93.57deg, #543DFB 0.71%, #F76CC5 50.59%, #FF4848 97.83%)',
                    borderRadius: '13px',
                    padding: '3px 5px 5px',
                    marginRight: '20px',
                }}
            >
                <Typography sx={{ color: '#FFF', lineHeight: '36px', px: '5px' }}>Aptos</Typography>
                <Button
                    sx={{
                        borderRadius: '10000px',
                        textTransform: 'none',
                        bgcolor: '#342D55',
                        color: '#FFF',
                        '&:hover': {
                            bgcolor: '#342D55',
                        },
                    }}
                    onClick={() => setOpen(!open)}
                >
                    {userAddress ? formart(userAddress as string) : isXs ? 'Connect' : 'Connect Wallet'}
                </Button>
            </Box>
            <Modal open={open} onClose={onClose}>
                <Box sx={{ ...modalStyle, width: { xs: '95%', md: '400px' } }}>
                    <Box
                        sx={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer' }}
                        onClick={() => setOpen(false)}
                    >
                        <IconX />
                    </Box>
                    <Typography variant="h5" component="h2" sx={{ textAlign: 'center', mb: 3, color: '#FFF' }}>
                        Connect Wallet
                    </Typography>
                    {wallets.map((wallet, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                width: '100%',
                                color: 'white',
                                background: '#42396B',
                                padding: '20px',
                                borderRadius: '13px',
                                my: 2,
                                cursor: 'pointer',
                            }}
                            onClick={() => onConnectWallet(wallet.name.toLocaleLowerCase())}
                        >
                            <img
                                src={wallet.logo}
                                alt="martian_logo"
                                style={{ width: '32px', height: '32px', borderRadius: '50%' }}
                            />
                            <Typography sx={{ lineHeight: '30px', px: 3 }}>{wallet.name}</Typography>
                        </Box>
                    ))}
                </Box>
            </Modal>
        </div>
    );
}

export default ConnectButton;
