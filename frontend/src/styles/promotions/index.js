import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { Colors } from '../theme';

export const PromotionsContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0',
    overflow: 'hidden',
    background: Colors.secondary,
    [theme.breakpoints.up('md')]: {
        padding: '40px 0'
    }
}));

export const MessageText = styled(Typography)(({theme}) => ({
    fontFamily: '"Montez", "cursive"',
    color: Colors.white,
    fontSize: '1.5rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    }
}));