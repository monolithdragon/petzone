import { Box, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { slideInBottom, slideInRight } from '../../animation';
import { Colors } from '../theme';

export const Product = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        position: 'relative'
    }
}));

export const ProductImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: '100%',
    background: Colors.light_gray,
    padding: '10px',
    [theme.breakpoints.down('md')]: {
        width: '80%',
        padding: '24px'
    }
}));
export const ProductActionButton = styled(IconButton)(() => ({
    background: Colors.white,
    margin: 4
}));

export const ProductFavButton = styled(ProductActionButton, {
    shouldForwardProp: (prop) => prop !== 'isFav'
})(({ isFav }) => ({
    color: isFav ? Colors.primary : Colors.light
}));

export const ProductAddToCart = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'show'
})(({ show, theme }) => ({
    width: '120px',
    fontSize: '12px',
    background: Colors.secondary,
    opacity: 0.9,
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        bottom: '2%',
        width: '300px',
        padding: '10px 5px',
        animation: show && `${slideInBottom} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`
    }
}));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 4
}));

export const ProductActionsWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'show'
})(({ show, theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: show ? 'visible' : 'none', 
        position: 'absolute',
        top: '20%',
        right: 0,
        animation: show && `${slideInRight} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`
    }
}));