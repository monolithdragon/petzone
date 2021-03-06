import { createTheme } from '@mui/material/styles';
import { lighten } from 'polished';

export const Colors = {
    primary: '#5f2c3e',
    secondary: '#d1adcc',
    succes: '#4caf50',
    info: '#00a2ff',
    danger: '#ff5722',
    warning: '#ffc107',
    dark: '#0e1b20',
    light: '#aaa',
    muted: '#abafb3',
    border: '#dddfe1',
    inverse: '#2f3d4a',
    shaft: '#333',

    dim_gray: '#696969',
    dove_gray: '#d5d5d5',
    body_bg: '#f3f6f9',
    light_gray: '#e6e6e6',

    white: '#fff',
    black: '#000'
};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            }
        },
        ShopButton: {
            styleOverrides: {
                root: {
                    color: Colors.white
                },
                primary: {
                    background: Colors.primary,
                    '&:hover': {
                        background: lighten(0.3, Colors.primary)
                    }
                },
                secondary: {
                    background: Colors.secondary,
                    '&:hover': {
                        background: lighten(0.3, Colors.secondary)
                    }
                }
            }
        }
    }
});

export default theme;