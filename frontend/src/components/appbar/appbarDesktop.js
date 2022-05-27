import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { AppbarContainer, AppbarHeader, AppbarList } from '../../styles/appbar';
import SearchIcon from '@mui/icons-material/Search';
import Actions from './actions';

const AppbarDesktop = ({ matches }) => {
    return (
        <AppbarContainer>
            <AppbarHeader>
                PETZONE
            </AppbarHeader>
            <AppbarList type='row'>
                <ListItemText primary='Home' />
                <ListItemText primary='Categories' />
                <ListItemText primary='Products' />
                <ListItemText primary='Contact' />
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </AppbarList>
            <Actions matches={matches} />
        </AppbarContainer>
    );
};

export default AppbarDesktop;