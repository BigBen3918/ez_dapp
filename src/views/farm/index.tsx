import React from 'react';
import Container from '../../components/container';
import DataBoard from './components/Databoard';
import Pools from './components/Pools';

function Farm() {
    return (
        <Container>
            <DataBoard />
            <Pools />
        </Container>
    );
}

export default Farm;
