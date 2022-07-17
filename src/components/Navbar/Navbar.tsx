import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
  useTheme,
  Box,
  Divider,
  ListItem,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Menu,
  AccountCircle,
  Brightness7,
  Brightness4,
} from '@mui/icons-material';
import React from 'react';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { Sidebar } from '..';

const toolbarStyles = {
  display: { md: 'flex' },
  justifyContent: 'space-between',
};

const Navbar = () => {
  // const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px');
  const isAuthenticated = true;
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const drawerWidth = 240;
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='fixed'>
        <Toolbar sx={toolbarStyles}>
          {isMobile && (
            <>
              <IconButton
                color='inherit'
                edge='start'
                onClick={() => {
                  setMobileOpen(true);
                }}
                sx={{}}
              >
                <Menu />
              </IconButton>
            </>
          )}
          <IconButton color='inherit' edge='end' onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <div>Searching...</div>}
          <div>
            {!isAuthenticated ? (
              <Button color='inherit' onClick={() => {}}>
                Login <AccountCircle />
              </Button>
            ) : (
              <Button color='inherit' onClick={() => {}}>
                <Link to={`/profile/13123`}>
                  <Avatar />
                </Link>
              </Button>
            )}
          </div>
          {isMobile && <div>Searching</div>}
        </Toolbar>
      </AppBar>
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </Box>
  );
};

export default Navbar;
