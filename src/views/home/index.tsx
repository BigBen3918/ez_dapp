import React from 'react'
import { makeStyles } from '@mui/styles'
import ConnectView from './components/connectView'
import HomeView from './components/HomeView';

const useStyles = makeStyles((theme:any) => ({
    homeView: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 50px 20px',
        [theme.breakpoints.down('md')]: {
            padding: '0 20px 20px',
        }
    }
})) as any;

function Home() {

    const classes = useStyles()

    return (
        <div className={classes.homeView}>
            {/* <ConnectView /> */}
            <HomeView />
        </div>
    )
}

export default Home