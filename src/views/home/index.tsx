import React from 'react';
import { Box, Typography, Paper, Grid, IconButton, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EastIcon from '@mui/icons-material/East';
import Container from '../../components/container';
import { Common_FillButton, Common_OutlineButton } from '../../components/button';
import Slider from 'react-slick';

import CryptoImage from '../../asset/icons/crypto-hand.png';
import CubeImage from '../../asset/icons/cube.png';
import PocketImage from '../../asset/icons/pocket-money.png';
import part1_img from '../../asset/icons/IDO.png';
import part2_img from '../../asset/icons/wallet.png';
import part3_img from '../../asset/icons/Private Key.png';
import SmartContract from '../../asset/icons/Smart_Contract.png';
import icon from '../../asset/icons/crypto-usdc.png';

const useStyles = makeStyles((theme: any) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTypography-root': {
            color: '#FFF',
        },
    },
    part1: {
        marginTop: '30px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap-reverse',
            flexDirection: 'column-reverse',
            justifyContent: 'center',
            textAlign: 'center',
        },
        justifyContent: 'space-between',
        width: '100%',
        backgroundImage: 'linear-gradient(93.57deg, #543DFB 0.71%, #F76CC5 50.59%, #FF4848 97.83%)',
        borderRadius: '10px',
        marginBottom: '100px',
        '& > div:nth-child(1)': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            flex: '1 1 65%',
            padding: '45px',
            [theme.breakpoints.down('sm')]: {
                padding: '15px',
            },
            '& > h1': {
                fontStyle: 'normal',
                fontSize: '56px',
                fontWeight: '700',
                lineHeight: '69px',
                letterSpacing: '-0.005em',
                padding: '30px 0',
                [theme.breakpoints.down('md')]: {
                    fontSize: '35px',
                },
            },
            '& > h3': {
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '158.6%',
                paddingBottom: '30px',
            },
            '& > div': {
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                direction: 'row',
                gap: '20px',
                flexWrap: 'wrap',
                '& > div': {
                    borderRadius: '10px',
                    backgroundColor: 'unset',
                    boxShadow: 'unset',
                    padding: '20px 30px',
                    border: '1px solid white',
                    width: '100%',
                    flex: '1',

                    '& > h2': {
                        fontSize: '40px',
                        letter: '2.5%',
                        lineHeight: '50px',
                        [theme.breakpoints.down('md')]: {
                            fontSize: '25px',
                        },
                    },
                },
            },
            [theme.breakpoints.down('lg')]: {
                flex: '1',
            },
        },
        '& > div:nth-child(2)': {
            flex: '1 1 35%',
            [theme.breakpoints.down('lg')]: {
                flex: '1',
            },
            display: 'flex',
            justifyContent: 'flex-end',
            '& > img': {
                width: '80%',
                [theme.breakpoints.down('md')]: {
                    width: '100%',
                },
                marginTop: '-40px',
            },
        },
    },
    part2: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        width: '100%',
        marginTop: '30px',
        [theme.breakpoints.down('lg')]: {
            flexWrap: 'wrap',
        },
        '& > div': {
            flex: '1 1 50%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '10px',
            backgroundColor: '#342D55',
            '& img': {
                borderRadius: '10px',
                objectFit: 'cover',
                zIndex: 0,
            },
            '& h3': {
                fontSize: '40px',
                fontWeight: '700',
                lineHeight: '80px',
                letter: '-3%',
            },
            '& h6': {
                fontSize: '18px',
                fontWeight: '600',
                lineHeight: '30px',
            },
            '& p': {
                fontSize: '18px',
                opacity: '.5',
                lineHeight: '50px',
            },
        },
    },
    part3: {
        marginTop: '140px',
        textAlign: 'center',
        width: '100%',
        '& > h6': {
            fontSize: '18px',
            fontWeight: 'normal',
            opacity: '.5',
            marginBottom: '50px',
        },
        '& > div': {
            padding: '40px 50px',
            background: '#342D55',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            borderRadius: '15px',
            [theme.breakpoints.down('md')]: {
                alignItems: 'center',
                flexDirection: 'column',
                padding: '30px',
            },
            '& > div': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                flex: '1 1 33.3%',
                [theme.breakpoints.down('md')]: {
                    flex: '1',
                },
                '& > h5': {
                    padding: '30px 0',
                },
                '& img': {
                    width: '140px',
                },
            },
        },
    },
    part4: {
        width: '100%',
        marginTop: '100px',
        '& .title': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            [theme.breakpoints.down('md')]: {
                gap: 20,
                textAlign: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            },
            '& h3': {
                padding: '20px 0',
                [theme.breakpoints.down('md')]: {
                    padding: '10px 0',
                },
                [theme.breakpoints.down('sm')]: {
                    fontSize: '30px',
                },
            },
            '& h6': {
                fontSize: '18px',
                opacity: '0.5',
            },
        },
        '& .slide_card': {
            background: '#342D55',
            padding: '35px',
            borderRadius: '15px',
            '& h6': {
                opacity: '0.5',
                padding: '10px 0',
            },
            '& h5': {
                padding: '10px 0',
                borderBottom: '1px solid grey',
            },
            '& h3': {
                fontSize: '35px',
            },
        },
    },
    part5: {
        width: '100%',
        marginTop: '100px',
        textAlign: 'center',
        '& > h3': {
            padding: '20px 0',
            [theme.breakpoints.down('md')]: {
                padding: '10px 0',
                fontSize: '35px',
            },
        },
        '& > h6': {
            fontSize: '18px',
            opacity: '0.5',
            marginBottom: '50px',
        },
        '& .card': {
            background: 'linear-gradient(104.45deg, #6452DE 0%, #F76CC5 73.89%, #FF6F6F 112.74%)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '20px 30px',
            [theme.breakpoints.down('sm')]: {
                padding: '10px',
                '& h5': {
                    fontSize: '20px',
                },
            },
            '& img': {
                borderRadius: '50%',
                width: '40px',
                backgroundColor: 'white',
            },
            '& button': {
                color: 'white',
            },
        },
    },
    part6: {
        marginTop: '100px',
        background: '#342D55',
        width: '100%',
        padding: '50px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column-reverse',
            textAlign: 'center',
            padding: '20px',
        },
        '& div': {
            flex: '1 1 50%',
            '& h3': {
                fontSize: '40px',
                fontWeight: '600',
                lineHeight: '50px',
                padding: '20px 0',
            },
            '& h6': {
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '30px',
                paddingBottom: '20px',
            },
            '& img': {
                width: '300px',
                [theme.breakpoints.down('lg')]: {
                    width: '250px',
                },
                [theme.breakpoints.down('sm')]: {
                    width: '100%',
                },
            },
        },
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

const slide_settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 1350,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 889,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

function Home() {
    const classes = useStyles();

    return (
        <Container>
            <Box className={classes.root}>
                <Box className={classes.part1}>
                    <Box>
                        <Typography variant="h1">The home of Yield Boosting</Typography>
                        <Typography variant="h3">
                            Nec consequat ut ullamcorper dis. Nullam integer hendrerit risus non dolor. Nibh interdum
                            placerat eu sit at morbi fusce.
                        </Typography>
                        <Box>
                            <Paper>
                                <Typography variant="subtitle1">Multi Chain TVL</Typography>
                                <Typography variant="h2">$818,768.67</Typography>
                            </Paper>
                            <Paper>
                                <Typography variant="subtitle1">Ethereum TVL</Typography>
                                <Typography variant="h2">$818,768.67</Typography>
                            </Paper>
                        </Box>
                    </Box>
                    <Box>
                        <img src={CryptoImage} alt="img" />
                    </Box>
                </Box>
                <Box className={classes.part2}>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                flexDirection: 'column',
                                p: 5,
                                width: { md: '70%', sm: '80%', xs: '100%' },
                                zIndex: 2,
                            }}
                        >
                            <Box>
                                <Typography variant="h3">Farm</Typography>
                                <Typography variant="subtitle1">Earn up to 32.67% APR</Typography>
                                <Typography variant="body1">Boost farming yield from top exchanges</Typography>
                            </Box>
                            <Common_FillButton content="View Pools Now"></Common_FillButton>
                        </Box>
                        <Box sx={{ position: 'absolute', bottom: 0, right: 0 }}>
                            <img src={CubeImage} alt="cube" />
                        </Box>
                        <Box className={classes.gradient__back}></Box>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                flexDirection: 'column',
                                p: 5,
                                zIndex: 2,
                                width: { md: '70%', sm: '80%', xs: '100%' },
                            }}
                        >
                            <Box>
                                <Typography variant="h3">Lend</Typography>
                                <Typography variant="subtitle1">Earn up to 24.65% APR</Typography>
                                <Typography variant="body1">Boost farming yield from top exchanges</Typography>
                            </Box>
                            <Common_FillButton content="Deposit Now"></Common_FillButton>
                        </Box>
                        <Box sx={{ position: 'absolute', bottom: 0, right: 0, zIndex: 0 }}>
                            <img src={PocketImage} alt="pocket" />
                        </Box>
                        <Box className={classes.gradient__back}></Box>
                    </Box>
                </Box>
                <Box className={classes.part3}>
                    <Typography variant="h3" sx={{ fontSize: { xs: '30px', sm: '35px', md: '45px' } }}>
                        Why Farm with Homora V2?
                    </Typography>
                    <Typography variant="subtitle1">High Yield. High Security. Quality Pools.</Typography>
                    <Box>
                        <Box>
                            <img src={part1_img} alt="" />
                            <Typography variant="h5">Start with what you have</Typography>
                            <Typography variant="subtitle1">Only a single asset needed to open positions</Typography>
                        </Box>
                        <Box>
                            <img src={part2_img} alt="" />
                            <Typography variant="h5">Borrow other assets you need</Typography>
                            <Typography variant="subtitle1">
                                Flexible borrowing of multiple assets to suit any farming strategies
                            </Typography>
                        </Box>
                        <Box>
                            <img src={part3_img} alt="" />
                            <Typography variant="h5">Up to 10x Leverage</Typography>
                            <Typography variant="subtitle1">Get higher APR from higher leverage</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.part4}>
                    <Box className="title">
                        <Box>
                            <Typography variant="h3">Popular Pools</Typography>
                            <Typography variant="subtitle1">
                                Seek the best available pools from top exchanges
                            </Typography>
                        </Box>
                        <Box>
                            <Common_FillButton content="View All Pools" />
                        </Box>
                    </Box>
                    <Box sx={{ paddingTop: '50px' }}>
                        <Slider {...slide_settings}>
                            {new Array(6).fill(0).map((item: any, index: any) => (
                                <Box sx={{ padding: '20px' }} key={index}>
                                    <Box className="slide_card">
                                        <Typography variant="subtitle1">Sushiswap</Typography>
                                        <Stack direction={'row'} alignContent={'center'} gap="20px">
                                            <Stack direction={'row'} alignItems="center" justifyContent={'center'}>
                                                <img src={icon} alt="" style={{ width: '35px', height: '35px' }} />
                                                <img
                                                    src={icon}
                                                    alt=""
                                                    style={{ width: '35px', height: '35px', marginLeft: '-13px' }}
                                                />
                                            </Stack>
                                            <Common_FillButton content="1.8x" padding="10px 20px" />
                                        </Stack>
                                        <Typography variant="h5">Sushi-ETH</Typography>
                                        <Typography variant="subtitle1">From 18.56% to</Typography>
                                        <Typography variant="h3">32.45% APR</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                </Box>
                <Box className={classes.part5}>
                    <Typography variant="h3">Lend with Homora V2</Typography>
                    <Typography variant="subtitle1">Earn more than HODLing in your wallets</Typography>
                    <Grid container spacing={4}>
                        {new Array(6).fill(12).map((item: any, index: any) => (
                            <Grid item xs={item} sm={item} md={item / 2} lg={item / 3} key={index}>
                                <Box className="card">
                                    <img src={icon} alt="" />
                                    <Box>
                                        <Typography variant="subtitle1">Lend</Typography>
                                        <Typography variant="h5">USDT</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle1">APY</Typography>
                                        <Typography variant="h5">22.24%</Typography>
                                    </Box>
                                    <IconButton>
                                        <EastIcon />
                                    </IconButton>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box className={classes.part6}>
                    <Box>
                        <Typography variant="h3">Egestas morbi viverra lectus</Typography>
                        <Typography variant="subtitle1">
                            Nulla sit ac feugiat senectus proin volutpat. Enim ac pulvinar a tortor feugiat sed sit sed
                            orci. Nisl non sit integer dui gravida.
                        </Typography>
                        <Stack
                            direction={'row'}
                            alignContent="center"
                            flexWrap={'wrap'}
                            gap={2}
                            sx={{ justifyContent: { lg: 'flex-start', xs: 'center' } }}
                        >
                            <Common_FillButton content="Partner with us" />
                            <Common_OutlineButton content="Partner with us" />
                        </Stack>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={SmartContract} alt="" />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Home;
