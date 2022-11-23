import React from 'react';
import { useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Avatar, Box } from '@mui/material';
import { IconMenu2 } from '@tabler/icons';
import ConnectButton from './ConnectWallet';

interface IHeader {
    handleDrawerToggle?: () => void;
    title: string;
}

const useStyles = makeStyles((theme) => ({
    topBar: {
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        backgroundColor: 'rgba(52, 45, 85, 1)',
        width: '100%',
        padding: '15px 0',
        zIndex: 100,
        // borderBottom: "2px solid #eee",
    },
    topBarShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: 1000,
        }),
        marginLeft: 0,
    },
    toggleButton: {
        marginLeft: '15px',
    },
})) as any;

function Header({ handleDrawerToggle }: IHeader) {
    const is1200 = useMediaQuery('(max-width: 1200px)');
    const classes = useStyles();

    return (
        <div className={classes.topBar}>
            {is1200 && (
                <div onClick={handleDrawerToggle} className={classes.toggleButton}>
                    <Avatar
                        sx={{
                            bgcolor: '#FFF',
                            boxShadow: '0px 1px 4px #ccc',
                            mt: '3px',
                        }}
                    >
                        <IconMenu2 color="#888" />
                    </Avatar>
                </div>
            )}
            <Box
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'flex-end',
                    alignContent: 'center',
                }}
            >
                <ConnectButton />
            </Box>
        </div>
    );
}

export default Header;
