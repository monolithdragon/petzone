import { Box, List, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Colors } from '../theme';
import '@fontsource/montez';

export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'
}));

export const AppbarHeader = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontFamily: '"Montez", "cursive"',
    fontSize: '4em',
    color: Colors.secondary
}));

export const AppbarList = styled(List)(({type}) => ({
    display: type ==='row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center',
}));

export const ActionContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`
}));

export const ActionContainerDesktop = styled(Box)(() => ({
    flexGrow: 0
}));