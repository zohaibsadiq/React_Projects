import { makeStyles } from '@mui/styles';

// Standard width for the sidebar drawer
const drawerWidth = 240;

// Navigation styles using Material-UI's makeStyles
const navStyles = makeStyles((theme) => ({
  // Toolbar styles (navbar section)
  toolbar: {
    display: 'flex', // Ensures items are placed in a row
    justifyContent: 'space-between', // Distributes items with space between
    alignContent: 'center', // Centers items vertically
    marginLeft: '240px', // Shifts toolbar to the right for desktop sidebar space
    height: '80px', // Standard toolbar height
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0', // Reset margin for small screens (no sidebar shift)
      flexwrap: 'wrap', // Wrap items to a new row if needed on smaller screens
      height: '40px', // Smaller toolbar height for mobile screens
    },
  },

  // Menu button (hamburger icon for mobile screens)
  menuButton: {
    marginRight: theme.spacing(2), // Adds space to the right
    [theme.breakpoints.up('sm')]: {
      display: 'none', // Hides menu button on larger screens
    },
  },

  // Drawer styling for sidebar
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth, // Sets drawer width for desktop
      flexShrink: 0, // Prevents drawer from resizing with screen
    },
  },

  // Paper style for the drawer (background container of sidebar)
  drawerPaper: {
    width: drawerWidth, // Standard width of the sidebar
  },

  // Link button style for navigation links
  linkButton: {
    '&:hover': {
      color: 'white !important', // Changes color on hover
      textDecoration: 'none', // Removes underline on hover
    },
  },
}));

export default navStyles;
