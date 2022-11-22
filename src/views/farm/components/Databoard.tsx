import React from 'react';
import BankIcon from '../../../asset/icons/bank.svg';
import WalletIcon from '../../../asset/icons/wallet.svg';
import PiehartIcon from '../../../asset/icons/pie-chart.svg';
import Piehart1Icon from '../../../asset/icons/pie-chart1.svg';

import { Box, Typography } from '@mui/material';

function DataBoard() {

    const datas = [
        {
            text: 'Your Stake',
            logo: BankIcon,
            value: '-'
        }, {
            text: 'TVL',
            logo: WalletIcon,
            value: '-'
        }, {
            text: 'Total Rewards',
            logo: PiehartIcon,
            value: '-'
        }, {
            text: 'ARC Price',
            logo: Piehart1Icon,
            value: '-'
        }
    ]

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}
            >
                {datas.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            bgcolor: '#FFF',
                            boxShadow: '0px 1px 4px #ccc',
                            borderRadius: '9999px',
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '200px',
                            height: '200px',
                            mx: 2,
                            mb: 2
                        }}
                    >
                        <img src={item.logo} style={{ width: '32px', height: '32px' }} />
                        <Typography sx={{ fontSize: '32px', mt: 1, color: '#555' }}>{item.value}</Typography>
                        <Typography sx={{ color: '#666' }}>{item.text}</Typography>
                    </Box>
                ))}
            </Box>
        </div>
    )
}

export default DataBoard;