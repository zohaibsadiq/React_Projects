import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex', // Sets up a flex container for layout alignment
    height: '100%', // Ensures the root container takes up the full available height
  },
  toolbar: {
    height: '70px', // Reserves space for the toolbar, typically matching the Navbar's height
    
  },
  content: {
    flexGrow: '1', // Allows this section to expand to take up any remaining space in the layout
    padding: '2rem', // Adds padding around the main content area for spacing
    width: '100%', // Sets the width of the content area to 100% of the available space
  },
}));
