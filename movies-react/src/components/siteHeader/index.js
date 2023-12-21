import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [anchorE3, setAnchorE3] = useState(null);

  const open = Boolean(anchorEl);
  const tvOpen = Boolean(anchorE2);
  const userOpen = Boolean(anchorE3);


  //Movies
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //TV

  const handleClickTV = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloseTV = () => {
    setAnchorE2(null);
  };



  //Users
  const handleClickUser = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handleCloseUser = () => {
    setAnchorE3(null);
  };



  //const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  
  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Watch Later", path: "/movies/mustWatches" },
    { label: "TV Favorites", path: "/tv/favorites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Popular", path: "/movies/popular" },
    { label: "Top Rated", path: "/movies/top_Rated" },
    { label: "TV Shows", path: "/tv/discover" },
    { label: "Search", path: "/search" },
    { label: "Login", path: "/login" },
    { label: "Signup", path: "/signup" },

  ];





  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" color="secondary" style={{ background: '#0033AA' }}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            20083540's Media Application
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies... and television!
          </Typography>
            {isMobile ? (
              <>
                
              {/*Mobile Movies Menu*/}

                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>

              {/*None-Mobile Menu*/}
              
              {/*Movies Menu */}

                <div>
                  <Button
                    id="moviesButton"
                    aria-controls={open ? 'moviesMenu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                      color: "white",
                      border: "2px solid #ffffff"
                    }}

                    >
                    Movies
                  </Button>
                  <Menu
                    id="moviesMenu"
                    aria-labelledby="moviesButton"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem id="movieItem1" onClick={() => handleMenuSelect("/")}> Discover Movies</MenuItem>
                    <MenuItem id="movieItem2" onClick={() => handleMenuSelect("/movies/upcoming/")} > Upcoming Movies</MenuItem>
                    <MenuItem id="movieItem3" onClick={() => handleMenuSelect("/movies/popular/")} > Popular Moviess</MenuItem>
                    <MenuItem id="movieItem4" onClick={() => handleMenuSelect("/movies/top_rated/")} > All Time Greatest Movies</MenuItem>
                    <MenuItem id="movieItem5" onClick={() => handleMenuSelect("/movies/search/")} > Search Movies</MenuItem>

                  </Menu>
                </div>

                
              {/*TV Menu */}

              <div>
                  <Button
                    id="tvButton"
                    aria-controls={tvOpen ? 'tvMenu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={tvOpen ? 'true' : undefined}
                    onClick={handleClickTV}
                    sx={{
                      color: "white",
                      border: "2px solid #ffffff"
                    }}

                  >
                    TV Shows
                  </Button>
                  <Menu
                    id="tvMenu"
                    aria-labelledby="tvButton"
                    anchorE2={anchorE2}
                    open={tvOpen}
                    onClose={handleCloseTV}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem id="tvItem1" onClick={() => handleMenuSelect("/tv/discover")}> Discover TV Shows</MenuItem>
                    <MenuItem id="tvItem2"> *NEW FEATURE*</MenuItem>

                  </Menu>
                </div>

                
              {/*User Menu */}

              <div>
                  <Button
                    id="userButton"
                    aria-controls={userOpen ? 'userMenu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={userOpen ? 'true' : undefined}
                    onClick={handleClickUser}
                    sx={{
                      color: "white",
                      border: "2px solid #ffffff"
                    }}

                  >
                    User
                  </Button>
                  <Menu
                    id="userMenu"
                    aria-labelledby="userButton"
                    anchorE3={anchorE3}
                    open={userOpen}
                    onClose={handleCloseUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem id="userItem1" onClick={() => handleMenuSelect("/login/")}> Login</MenuItem>
                    <MenuItem id="userItem2" onClick={() => handleMenuSelect("/signup/")} > Register</MenuItem>
                    <MenuItem id="userItem3" onClick={() => handleMenuSelect("/user/moviefavorites")} > Favourite Movies</MenuItem>
                    <MenuItem id="userItem4" onClick={() => handleMenuSelect("/user/moviewatchlater")} > Saved Movies</MenuItem>
                    <MenuItem id="userItem5" onClick={() => handleMenuSelect("/user/tvfavorites")} > Favourite TV Shows</MenuItem>
                  </Menu>
                </div>


              </>
            )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;