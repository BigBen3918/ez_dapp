import React from 'react';
import {
    Box,
    Typography,
    Stack,
    Switch,
    OutlinedInput,
    InputAdornment,
    ToggleButton,
    ToggleButtonGroup,
    Slider,
    Button,
} from '@mui/material';
import { styled } from '@mui/system';
import { makeStyles } from '@mui/styles';
import Container from '../../components/container';

import a from '../../asset/icons/crypto-ethereum.png';
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
            '& .modal1': {
                marginBottom: '20px',
                padding: '40px',
                background: '#342D55',
                borderRadius: '15px',
            },
            '& .modal2': {
                marginBottom: '20px',
                padding: '40px',
                background: '#342D55',
                borderRadius: '15px',
            },
            '& .modal3': {
                padding: '40px',
                background: '#342D55',
                borderRadius: '15px',
            },
            '& .modal4': {
                padding: '40px',
                background: '#342D55',
                borderRadius: '15px',
            },
        },
    },
    buttons: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginBottom: '20px',
        '& .Mui-selected': {
            background: 'linear-gradient(93.41deg, #6452DE 0.68%, #F76CC5 53.61%, #FF6F6F 103.74%)',
        },
        '& button': {
            flex: '1',
            background: '#241F3E',
            border: 'none!important',
            padding: '18px 33px',
            color: 'white',
            fontSize: '18px',
        },
    },
    left: {
        left: '5px',
        right: 'unset',
    },
    right: {
        right: '5px',
        left: 'unset',
    },
    devideLine: {
        background: 'white',
        height: '1px',
        opacity: '.5',
        margin: '20px 0',
    },
}));

const StyledInput = styled(OutlinedInput)({
    color: 'white',
    border: '1px solid grey',
    outline: 'none',
    '& .MuiTypography-root': {
        color: 'white',
    },
    '&:hover': {
        border: '1px solid #ddd',
    },
    fieldset: {
        border: 'none',
    },
});

const StyledSwitch = styled(Switch)(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#294074',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#241F3E' : '#39393D',
        opacity: 1,
    },
}));

const marks = [
    {
        value: 1,
        label: '1.00x',
    },
    {
        value: 1.24,
        label: '1.24x',
    },
    {
        value: 1.45,
        label: '1.45x',
    },
    {
        value: 1.77,
        label: '1.77x',
    },
    {
        value: 2,
        label: '2.00x',
    },
];

export default function Invest() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [alignment, setAlignment] = React.useState<string>('1');
    const [rectCheck, setRectCheck] = React.useState(false);
    const [debt, setDebt] = React.useState(75);

    function slideValue(value: number) {
        return `value`;
    }

    const handleClick = () => {
        setRectCheck(!rectCheck);
    };

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
                            <Typography variant="h4">SUSHI/ETH</Typography>
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
                        <Box className={'modal1'}>
                            <Typography variant="h4" sx={{ '@media(max-width: 450px)': { fontSize: '24px' } }}>
                                1. Supply assets
                            </Typography>
                            <Typography variant="subtitle1" sx={{ pt: 2, pb: 3 }}>
                                Turn on the toggle for the assets you wish to supply in
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    py: 2,
                                    '@media(max-width: 450px)': { flexDirection: 'column' },
                                }}
                            >
                                <Stack direction={'row'} alignItems={'center'} gap={2}>
                                    <StyledSwitch />
                                    <Stack direction={'row'} alignItems={'center'} gap={1}>
                                        <img src={a} alt="" style={{ width: '25px', height: '25px' }} />
                                        <Typography sx={{ fontWeight: 400, fontSize: '18px' }}>Sushi</Typography>
                                    </Stack>
                                </Stack>
                                <Typography variant="subtitle1">Balance: 0.00 SUSHI</Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    '@media(max-width: 450px)': { flexDirection: 'column' },
                                }}
                            >
                                <Stack direction={'row'} alignItems={'center'} gap={2}>
                                    <StyledSwitch />
                                    <Stack direction={'row'} alignItems={'center'} gap={1}>
                                        <img src={b} alt="" style={{ width: '25px', height: '25px' }} />
                                        <Typography sx={{ fontWeight: 400, fontSize: '18px' }}>Eth</Typography>
                                    </Stack>
                                </Stack>
                                <Typography variant="subtitle1">Balance: 0.00 ETH</Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    py: 2,
                                }}
                            >
                                <StyledInput
                                    value={value}
                                    placeholder="$0.00"
                                    onChange={(e: any) => setValue(e.target.value)}
                                    endAdornment={<InputAdornment position="end">ETH</InputAdornment>}
                                    sx={{ width: '100%' }}
                                />
                            </Box>
                            <ToggleButtonGroup
                                value={alignment}
                                exclusive
                                onChange={(e: any) => setAlignment(e.target.value)}
                                className={classes.buttons}
                            >
                                <ToggleButton value="1">25%</ToggleButton>
                                <ToggleButton value="2">50%</ToggleButton>
                                <ToggleButton value="3">75%</ToggleButton>
                                <ToggleButton value="4">100%</ToggleButton>
                            </ToggleButtonGroup>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    '@media(max-width: 450px)': { flexDirection: 'column' },
                                }}
                            >
                                <Stack direction={'row'} alignItems={'center'} gap={2}>
                                    <StyledSwitch />
                                    <Stack direction={'row'} alignItems={'center'} gap={1}>
                                        <img src={b} alt="" style={{ width: '25px', height: '25px' }} />
                                        <Typography sx={{ fontWeight: 400, fontSize: '18px' }}>SLP</Typography>
                                    </Stack>
                                </Stack>
                                <Typography variant="subtitle1">Balance: 0.00 SLP</Typography>
                            </Box>
                        </Box>
                        <Box className={'modal2'}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    '@media(max-width: 576px)': { flexDirection: 'column' },
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{ py: 2, '@media(max-width: 450px)': { fontSize: '24px' } }}
                                >
                                    2. Set Leverage
                                </Typography>
                                <Stack direction="row" justifyContent={'center'} alignItems="center" gap={2}>
                                    <Typography variant="body2" sx={{ fontSize: '18px' }}>
                                        Get Max APR
                                    </Typography>
                                    <StyledSwitch />
                                </Stack>
                            </Box>
                            <Typography variant="h6">Set to manage the total leverage level</Typography>
                            <Box
                                sx={{
                                    py: 3,
                                    color: 'white',
                                    '& .MuiSlider-markLabel': {
                                        color: '#aaa',
                                    },
                                }}
                            >
                                <Slider
                                    defaultValue={1}
                                    getAriaValueText={slideValue}
                                    step={0.01}
                                    valueLabelDisplay="auto"
                                    marks={marks}
                                    min={1}
                                    max={2}
                                    color="secondary"
                                />
                            </Box>
                            <Typography variant="body2" sx={{ fontSize: '18px' }}>
                                Additional 1.45x of your supplied assets will be borrowed
                            </Typography>
                        </Box>
                        <Box className={'modal3'}>
                            <Typography variant="h4" sx={{ py: 2, '@media(max-width: 450px)': { fontSize: '24px' } }}>
                                3. Borrow Assets
                            </Typography>
                            <Typography variant="h6">
                                Select your option to borrow assets in order to open a new position
                            </Typography>
                            <Box
                                onClick={handleClick}
                                sx={{
                                    background: '#241F3E',
                                    borderRadius: '13px',
                                    height: '80px',
                                    mt: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    '@media(max-width: 500px)': { textAlign: 'center' },
                                }}
                            >
                                <Box
                                    sx={{
                                        flex: '1',
                                        height: '70px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 1,
                                        userSelect: 'none',
                                    }}
                                >
                                    Minimize Price Impact
                                </Box>
                                <Box
                                    sx={{
                                        flex: '1',
                                        height: '70px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 1,
                                        userSelect: 'none',
                                    }}
                                >
                                    Custom
                                </Box>
                                <Box
                                    sx={{
                                        background:
                                            'linear-gradient(93.57deg, #543DFB 0.71%, #F76CC5 50.59%, #FF4848 97.83%)',
                                        width: '50%',
                                        height: '70px',
                                        position: 'absolute',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        borderRadius: '13px',
                                        zIndex: 0,
                                    }}
                                    className={rectCheck ? classes.right : classes.left}
                                ></Box>
                            </Box>
                            <Typography variant="h6" sx={{ my: 3 }}>
                                Debt Ratio
                            </Typography>
                            <Typography variant="h4">{debt}%</Typography>
                            <Slider
                                defaultValue={debt}
                                step={0.01}
                                onChange={(e: any) => setDebt(e.target.value)}
                                disabled
                            />
                            <Box sx={{ p: 4, border: '1px solid rgba(255,255,255,.3)', borderRadius: '13px', mt: 3 }}>
                                <Typography variant="body1" sx={{ fontSize: '21px' }}>
                                    Liquidiation Conditions
                                </Typography>
                                <Typography variant="h6" sx={{ lineHeight: '40px' }}>
                                    Blandit at ornare sagittis in tortor tempus morbi dolor. Consectetur.
                                </Typography>
                                <Typography variant="h6" sx={{ lineHeight: '40px' }}>
                                    Tempus justo semper augue hendrerit odio. Sem nulla ac.
                                </Typography>
                                <Typography variant="h6" sx={{ lineHeight: '40px', mb: 3 }}>
                                    Morbi molestie ac posuere iaculis commodo lectus nec. Vulputate.
                                </Typography>
                                <hr />
                                <Stack
                                    direction="row"
                                    alignItems={'center'}
                                    gap={5}
                                    sx={{ pt: 2, '@media(max-width: 560px)': { flexDirection: 'column', gap: 1 } }}
                                >
                                    <Typography variant="body1" sx={{ fontSize: '18px' }}>
                                        Current Price
                                    </Typography>
                                    <Stack direction="row" alignItems={'center'} gap={1}>
                                        <img src={a} alt="" style={{ width: '20px', height: '20px' }} />
                                        <Typography variant="h6">$1.00</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems={'center'} gap={1}>
                                        <img src={b} alt="" style={{ width: '20px', height: '20px' }} />
                                        <Typography variant="h6">$1,6403</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                            <Typography variant="body1" sx={{ fontSize: '18px', my: 2 }}>
                                Borrow Assets
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    gap: 3,
                                    '& > div': {
                                        flex: '1',
                                        p: 3,
                                        border: '1px solid rgba(255,255,255,.3)',
                                        borderRadius: '13px',
                                    },
                                }}
                            >
                                <Stack direction={'row'} alignItems="center" gap={2}>
                                    <img src={a} alt="" style={{ width: '50px', height: '50px' }} />
                                    <Stack direction={'column'}>
                                        <Typography variant="h5" sx={{ fontSize: '22px', fontWeight: 700 }}>
                                            102.19 DAI
                                        </Typography>
                                        <Typography variant="h6">-$102.45</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction={'row'} alignItems="center" gap={2}>
                                    <img src={b} alt="" style={{ width: '50px', height: '50px' }} />
                                    <Stack direction={'column'}>
                                        <Typography variant="h5" sx={{ fontSize: '22px', fontWeight: 700 }}>
                                            102.19 DAI
                                        </Typography>
                                        <Typography variant="h6">-$102.45</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
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
                        <Box className={'modal4'}>
                            <Typography variant="h4" sx={{ py: 2, fontSize: '24px' }}>
                                Your Actions
                            </Typography>
                            <Box
                                sx={{
                                    background: '#241F3E',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '23px 45px',
                                    justifyContent: 'center',
                                    borderRadius: '13px',
                                    '@media(max-width: 500px)': {
                                        flexDirection: 'column',
                                        textAlign: 'center',
                                    },
                                }}
                            >
                                <Box sx={{ flex: '1' }}>
                                    <Typography variant="h6">Estimated APR</Typography>
                                    <Typography variant="h5">9.79%</Typography>
                                </Box>
                                <Box sx={{ flex: '1' }}>
                                    <Typography variant="h6">Your leverage</Typography>
                                    <Typography variant="h5">2.27x</Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mt: 3,
                                }}
                            >
                                <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Typography variant="h5" sx={{ fontSize: '18px', py: 2 }}>
                                        Total Supply
                                    </Typography>
                                    <Stack direction={'row'} alignItems="center" gap={1}>
                                        <img src={a} alt="" width={25} height={25} />
                                        <Typography variant={'h6'}>0.056432 ETH</Typography>
                                    </Stack>
                                    <Stack direction={'row'} alignItems="center" gap={1}>
                                        <img src={a} alt="" width={25} height={25} />
                                        <Typography variant={'h6'}>0 DAI</Typography>
                                    </Stack>
                                    <Stack direction={'row'} alignItems="center" gap={1}>
                                        <img src={a} alt="" width={25} height={25} />
                                        <Typography variant={'h6'}>0 SLP</Typography>
                                    </Stack>
                                </Box>
                                <Box sx={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Typography variant="h5" sx={{ fontSize: '18px', py: 2 }}>
                                        -$90.21
                                    </Typography>
                                    <Typography variant="h6">$0.00</Typography>
                                    <Typography variant="h6">$0.00</Typography>
                                    <Typography variant="h6">$0.00</Typography>
                                </Box>
                            </Box>
                            <Box className={classes.devideLine} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mt: 3,
                                }}
                            >
                                <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Typography variant="h5" sx={{ fontSize: '18px', py: 2 }}>
                                        Total Debt
                                    </Typography>
                                    <Stack direction={'row'} alignItems="center" gap={1}>
                                        <img src={a} alt="" width={25} height={25} />
                                        <Typography variant={'h6'}>0.056432 ETH</Typography>
                                    </Stack>
                                    <Stack direction={'row'} alignItems="center" gap={1}>
                                        <img src={a} alt="" width={25} height={25} />
                                        <Typography variant={'h6'}>0 DAI</Typography>
                                    </Stack>
                                </Box>
                                <Box sx={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Typography variant="h5" sx={{ fontSize: '18px', py: 2 }}>
                                        -$90.21
                                    </Typography>
                                    <Typography variant="h6">$0.00</Typography>
                                    <Typography variant="h6">$0.00</Typography>
                                </Box>
                            </Box>
                            <Box className={classes.devideLine} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    mt: 3,
                                }}
                            >
                                <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Typography variant="h5" sx={{ fontSize: '18px', py: 2 }}>
                                        Position Value (after swap)
                                    </Typography>
                                    <Stack direction={'row'} alignItems="center" gap={1}>
                                        <img src={a} alt="" width={25} height={25} />
                                        <Typography variant={'h6'}>0.056432 ETH</Typography>
                                    </Stack>
                                    <Stack direction={'row'} alignItems="center" gap={1}>
                                        <img src={a} alt="" width={25} height={25} />
                                        <Typography variant={'h6'}>0 DAI</Typography>
                                    </Stack>
                                </Box>
                                <Box sx={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Typography variant="h5" sx={{ fontSize: '18px', py: 2 }}>
                                        -$90.21
                                    </Typography>
                                    <Typography variant="h6">$0.00</Typography>
                                    <Typography variant="h6">$0.00</Typography>
                                </Box>
                            </Box>
                            <Button
                                sx={{
                                    background:
                                        'linear-gradient(93.57deg, #543DFB 0.71%, #F76CC5 50.59%, #FF4848 97.83%)',
                                    borderRadius: '13px',
                                    width: '100%',
                                    color: 'white',
                                    padding: '20px',
                                    mt: 3,
                                }}
                            >
                                Proceed to Summary
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
