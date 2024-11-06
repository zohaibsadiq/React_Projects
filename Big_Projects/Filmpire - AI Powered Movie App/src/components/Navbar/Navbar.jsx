import { useContext, useEffect, useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery, useTheme } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import navStyles from './navbarstyles';
import { Sidebar } from '../index';
import { Search } from '../index';

import { fetchToken, movieApi, createSessionId } from '../../utils';
import { setUser, userSelector } from '../../features/auth';
import { useDispatch, useSelector } from 'react-redux';
import { ColorModeContext } from '../../utils/ToggleColorMode';

// Main navigation bar component
const Navbar = () => {
  const token = localStorage.getItem('token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');
  const { isAuthenticated, user } = useSelector(userSelector);
  const classes = navStyles(); // Custom styles for the Navbar
  const isMobile = useMediaQuery('(max-width:600px)'); // Determines if the screen is mobile size
  const theme = useTheme(); // Accesses current theme (light or dark)
  const [mobileOpen, setMobileOpen] = useState(false); // State to handle mobile drawer open/close

  const dispatch = useDispatch();
  useEffect(() => {
    const loginUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await movieApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await movieApi.get(`/account?session_id=${sessionId}`);
          dispatch(setUser(userData));
        }
      }
    };
    loginUser();
  }, [token]);

  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          {/* Show menu icon only on mobile */}
          {isMobile && (
            <IconButton
              color='inherit'
              edge='start'
              style={{ outline: 'none' }}
              onClick={() => {
                setMobileOpen((prevMobileOpen) => !prevMobileOpen);
              }}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          {/* Theme toggle button (light/dark) */}
          <IconButton color='inherit' sx={{ ml: 1 }} onClick={toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {/* Search bar placeholder (shown on desktop, hidden on mobile) */}
          {!isMobile && <Search />}

          {/* Profile and Login/Logout section */}
          <div>
            {!isAuthenticated ? (
              <Button color='inherit' onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color='inherit'
                LinkComponent={Link}
                to={`/profile/:${user.id}`}
                className={classes.linkButton}
                onClick={() => {}}
              >
                {/* Shows 'My Movies' text on desktop */}
                {!isMobile && <>My Movies &nbsp;</>}
                {/* Profile avatar */}
                <Avatar
                  alt='Profile'
                  src={`https://www.themoviedb.org/t/p/w64_and_h64_face${user?.avatar?.tmdb?.avatar_path}`}
                  sx={{ width: 30, height: 30 }}
                />
              </Button>
            )}
          </div>

          {/* Search bar placeholder (shown on mobile only) */}
        </Toolbar>
        {isMobile && <Search />}
      </AppBar>

      {/* Drawer section (sidebar navigation) */}
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant='temporary' // Temporary drawer for mobile view
              anchor='right' // Drawer opens from the right
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }} // Keeps the drawer in the DOM even when closed
            >
              <Sidebar setMobileOpen={setMobileOpen} /> {/* Sidebar component */}
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant='permanent' // Permanent drawer for desktop view
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
            //Why Drawer Has a Paper Sub-component:
            // The Drawer component uses Paper as its internal container to give the drawer a defined surface style, which includes shadow and background color.
            // By styling paper within Drawer, you control the look of the actual sliding drawer panel (like width, color, etc.), without affecting the entire Drawer component.
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
