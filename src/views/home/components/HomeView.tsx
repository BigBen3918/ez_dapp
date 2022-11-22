import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import CryptoImage from '../../../asset/icons/crypto-hand.png'
import CubeImage from '../../../asset/icons/cube.png'
import PocketImage from '../../../asset/icons/pocket-money.png'

const useStyles = makeStyles(() => ({
    homeView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTypography-root': {
            color: '#FFF'
        }
    }
}))

function HomeView() {

    const classes = useStyles()
    return (
        <div className={classes.homeView}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-around',
                backgroundImage: 'linear-gradient(93.57deg, #543DFB 0.71%, #F76CC5 50.59%, #FF4848 97.83%)',
                borderRadius: '20px',
                p: 3,
                position: 'relative'
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around'
                    }}
                >
                    <Typography sx={{ fontSize: '36px', fontWeight: 'bold' }}>The home of Yield Boosting</Typography>
                    <Typography sx={{ fontSize: '24px', mt: 3, mb: 2 }}>Your lending & leveraged yield farming protocol on APTOS</Typography>
                    <Typography sx={{ fontSize: '26px', fontWeight: 'bold' }}>
                        <Typography component='span' sx={{ mr: 2, fontSize: '18px' }}>
                            Total Value Locked :
                        </Typography>
                        $185,000
                    </Typography>
                </Box>
                <Box
                    sx={{
                        marginTop: '-60px'
                    }}
                >
                    <img src={CryptoImage} alt='img' style={{ width: '300px', height: '300px' }} />
                </Box>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Box sx={{
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    bgcolor: 'rgba(52, 45, 85, 1)',
                    borderRadius: '20px',
                    p: 3,
                    mr: 2
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'column',
                    }}>
                        <Box>
                            <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>Farm</Typography>
                            <Typography sx={{ fontSize: '24px', my: 1 }}>Earn up to 32.67% APR</Typography>
                            <Typography sx={{ fontSize: '18px' }}>Boost farming yield from top exchanges</Typography>
                        </Box>
                        <Button sx={{
                            color: '#FFF',
                            fontSize: '20px'
                        }}>View Pools Now</Button>
                    </Box>
                    <Box sx={{ mb: -3, mr: -3 }}>
                        <img src={CubeImage} alt='cube' />
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    bgcolor: 'rgba(52, 45, 85, 1)',
                    borderRadius: '20px',
                    p: 3,
                    ml: 2
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'column',

                    }}>
                        <Box>
                            <Typography sx={{ fontSize: '32px', fontWeight: 'bold' }}>Lend</Typography>
                            <Typography sx={{ fontSize: '24px', my: 1 }}>Earn up to 24.65% APR</Typography>
                            <Typography sx={{ fontSize: '18px' }}>Get high interest from lending crypto assets</Typography>
                        </Box>
                        <Button sx={{
                            color: '#FFF',
                            fontSize: '20px'
                        }}>Deposit Now</Button>
                    </Box>
                    <Box sx={{ mb: -3, mr: -3 }}>
                        <img src={PocketImage} alt='pocket' />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default HomeView