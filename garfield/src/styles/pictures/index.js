import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PicturesContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '10px 0px',
    background: "#d4dfee", // banner color
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export const PicturesImage = styled('img')(({src, theme}) => ({
    src: `url(${src})`,
    width: '300px',
    padding: '10px',
    [theme.breakpoints.down('md')]: {
        width: '350px'
    },
    [theme.breakpoints.down('sm')]: {
        width: '320px',
        height: '300px'
    }
}));

export const PicturesContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 420,
    padding: '30px',
}));

