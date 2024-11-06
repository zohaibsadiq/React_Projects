import { makeStyles } from '@mui/styles';

// Styles for the Sidebar component
const sideBarStyles = makeStyles((theme) => ({
  // Styles the logo link container
  imageLink: {
    display: 'flex', // Centers logo horizontally
    justifyContent: 'center',
    padding: '10% 0%', // Adds top and bottom padding for spacing
  },

  // Styles the logo image
  image: {
    width: '70%', // Sets logo width relative to container for responsive sizing
  },

  // General link styling for sidebar items
  links: {
    textDecoration: 'none', // Removes underline
    color: theme.palette.text.primary, // Sets text color based on theme (light or dark mode)
  },

  // Conditional styling for genre images based on theme mode
  genreImages: {
    filter: theme.palette.mode === 'dark' ? 'invert(1)' : '',
    // If dark mode, show normal; otherwise, invert colors for better visibility in light mode
  },
}));

export default sideBarStyles;
