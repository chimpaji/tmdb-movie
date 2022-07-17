import { useGetGenresQuery } from '../../features/tmdbApi/tmdbApi';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import genresIcon from '../../assets/genres';
// import { useAppDispatch } from '../../app/hooks';
import { selectGenreOrCatagory } from '../../features/genreOrCategory/genreOrCategory';
import { useAppDispatch } from '../../app/hooks';
const drawerWidth = 240;

// const blueLogo =
//   'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo =
  'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg';
const redLogo =
  'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

type SideBarProps = {
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileOpen: boolean;
};

const Sidebar = ({ setMobileOpen, mobileOpen }: SideBarProps) => {
  const isMobile = useMediaQuery('(max-width:600px');
  const { data: genres } = useGetGenresQuery(null);
  const dispatch = useAppDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const theme = useTheme();
  const category = [
    { label: 'Popular', value: 'popular' },
    { label: 'Now playing', value: 'now_playing' },
    { label: 'Upcoming', value: 'upcoming' },
  ];
  const demoCategories = [
    { label: 'Comedy', value: 'comedy' },
    { label: 'Drama', value: 'drama' },
    { label: 'Horror', value: 'horror' },
    { label: 'Fantasy', value: 'fantasy' },
  ];
  const drawer = (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Link to='/' style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={theme.palette.mode === 'light' ? blueLogo : redLogo}
          alt='logo'
          width='70%'
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {category.map((CAT, index) => (
          <ListItem
            key={CAT.value}
            disablePadding
            onClick={() => {
              dispatch(
                selectGenreOrCatagory({ select: 'category', value: CAT.value })
              );
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <img src={genresIcon[CAT.value]} alt='logo' height={30} />
              </ListItemIcon>
              <ListItemText primary={CAT.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {genres?.genres.map(({ name, id }, index) => (
          <ListItem
            key={name}
            disablePadding
            onClick={() => {
              dispatch(selectGenreOrCatagory({ select: 'genre', value: id }));
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={genresIcon[name.toLowerCase()]}
                  alt='logo'
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label='mailbox folders'
    >
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
