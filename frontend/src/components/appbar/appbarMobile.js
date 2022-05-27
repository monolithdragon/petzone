import React from 'react';
import { IconButton } from '@mui/material';
import { AppbarContainer, AppbarHeader } from '../../styles/appbar';
import SearchIcon from '@mui/icons-material/Search';
import Actions from './actions';
import MenuIcon from '@mui/icons-material/Menu';

const AppbarMobile = ({matches}) => {
    return (
        <AppbarContainer>
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <AppbarHeader textAlign={'center'} variant='h4'>
                PETZONE
            </AppbarHeader>
            <IconButton>
                <SearchIcon />
            </IconButton>            
            <Actions matches={matches} />
        </AppbarContainer>
    );
};

export default AppbarMobile;