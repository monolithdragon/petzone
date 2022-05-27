import React from 'react';
import { Divider, ListItemButton, ListItemIcon } from '@mui/material';
import { ActionContainerDesktop, ActionContainerMobile, AppbarList } from '../../styles/appbar';
import { Favorite, Person, ShoppingCartOutlined } from '@mui/icons-material';
import { Colors } from './../../styles/theme/index';

const Actions = ({ matches }) => {
    const Component = matches ? ActionContainerMobile : ActionContainerDesktop;

    return (
        <Component>
            <AppbarList type='row'>
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: matches && Colors.secondary
                    }}>
                        <ShoppingCartOutlined />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem />
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: matches && Colors.secondary
                    }}>
                        <Favorite />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation='vertical' flexItem />
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: matches && Colors.secondary
                    }}>
                        <Person />
                    </ListItemIcon>
                </ListItemButton>
            </AppbarList>
        </Component>
    );
};

export default Actions;