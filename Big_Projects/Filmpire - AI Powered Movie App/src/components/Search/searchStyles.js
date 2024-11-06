import { makeStyles } from '@mui/styles';

const searchStyles = makeStyles((theme) => ({
  searchContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
  },
  searchInput: {
    color: theme.palette.mode === 'light' ? 'black' : 'inherit',
    filter: theme.palette.mode === 'light' ? 'invert(1)' : 'none',

    // Apply custom colors to the underline for both default and focused states
    '& .MuiInput-underline:before': {
      borderBottomColor: 'blue', // Blue underline when not focused
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'blue', // Blue underline when focused
    },

    // Mobile-specific styles
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: '-10px',
      marginBottom: '10px',
    },
  },
}));

export default searchStyles;
