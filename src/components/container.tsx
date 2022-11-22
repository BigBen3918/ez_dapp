import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        padding: '50px',
    },
}));

export default function Container({ children }: { children: React.ReactNode }) {
    const classes = useStyles();
    return <Box className={classes.root}>{children}</Box>;
}
