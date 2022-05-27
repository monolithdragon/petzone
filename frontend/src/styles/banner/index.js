import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Colors } from '../theme';
import '@fontsource/montez';

export const BannerContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    width: '100%',
    height: '100%',
    background: Colors.light_gray,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 420,
    padding: '30px',
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    fontSize: '72px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px'
    }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em'
    }
}));

export const BannerImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: '500px',    
    [theme.breakpoints.down('md')]: {
        width: '350px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '320px',
        height: '300px'
    }
}));

