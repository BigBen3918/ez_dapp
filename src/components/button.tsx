import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
    background: 'linear-gradient(93.41deg, #6452DE 0.68%, #F76CC5 53.61%, #FF6F6F 103.74%)',
    borderRadius: '100px',
    color: 'white',
    padding: '14px 33px',
    fontSize: '18px',
    lineHeight: '23px',
});

const OutlineStyledButton = styled(Button)({
    background: 'transparent',
    borderRadius: '100px',
    color: 'white',
    border: '1px solid #ddd',
    padding: '14px 33px',
    fontSize: '18px',
    lineHeight: '23px',
});

interface Object {
    content: string;
    padding?: string;
}

export const Common_FillButton = (props: Object) => {
    const { content } = props;

    return <StyledButton>{content}</StyledButton>;
};

export const Common_OutlineButton = (props: any) => {
    const { content } = props;

    return <OutlineStyledButton>{content}</OutlineStyledButton>;
};
