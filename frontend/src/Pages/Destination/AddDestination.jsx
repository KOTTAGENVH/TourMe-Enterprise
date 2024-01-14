import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { MuiFileInput } from "mui-file-input";
import MainListItems from "./Components/listItems";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { Image } from "@mui/icons-material";
import { setdarkmode } from "../../Redux/darkmode/darkmodeAction";
import { useDispatch } from "react-redux";
import { signOutAction } from "../../Redux/auth/authAction";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://tour-me-frontend.vercel.app/">
        TourME(WEB)
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const defaultTheme = createTheme();

export default function AddDestination() {
  const settings = ["Profile", "Logout"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(false);
  const [image1, setImage1] = React.useState(null);
  const [image2, setImage2] = React.useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const darkmode = useSelector((state) => state.darkmode.darkmode);

  const handleColor = () => {
    if (darkmode) {
      return "white";
    } else {
      return "black";
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    dispatch(setdarkmode(!darkMode));
  };

  const handleMenuItemClick = (setting) => {
    handleCloseUserMenu();

    if (setting === "Logout") {
      dispatch(signOutAction());
      handleCloseUserMenu();
    } else if (setting === "Profile") {
      handleCloseUserMenu();
    } else {
      handleCloseUserMenu();
    }
  };

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue < 0) {
      event.target.value = 0; 
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="absolute"
        open={open}
        sx={{
          backgroundColor: "transparent",
          backdropFilter: "blur(60px)",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Destination Management
          </Typography>
          <FormGroup
            sx={{
              marginLeft: "60%",
              justifyContent: "flex-end",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={handleDarkModeToggle}
                  color="primary"
                  icon={<Brightness5Icon />}
                  checkedIcon={<Brightness3Icon />}
                />
              }
            />
          </FormGroup>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: "45px",
                marginLeft: "auto",
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleMenuItemClick(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            height: "100vh",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <MainListItems />
          <Divider sx={{ my: 1 }} />
        </List>
      </Drawer>
      <Box
        sx={{
          height: "30vhauto",
          overflow: "auto",
          margin: "10vh",
          padding: "20px",
          width: "90vw",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ color: handleColor() }}
        >
          Add Destination
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: "5vh" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Destination Name"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  color: handleColor(),
                  fontSize: "20px",
                  borderRadius: "20px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Main Description (Only 100 Characters)"
              variant="outlined"
              fullWidth
              inputProps={{
                maxLength: 100,
              }}
              InputProps={{
                sx: {
                  color: handleColor(),
                  fontSize: "20px",
                  borderRadius: "20px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-multiline-static"
              label="Description "
              variant="outlined"
              multiline
              fullWidth
              rows={5}
              inputProps={{
                maxLength: 400,
              }}
              InputProps={{
                sx: {
                  color: handleColor(),
                  fontSize: "20px",
                  borderRadius: "20px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MuiFileInput
              sx={{ height: "8vh" }}
              fullWidth
              value={image1}
              label="Upload your image"
              onChange={setImage1}
              InputProps={{
                inputProps: {
                  accept: "video/*",
                },
                endAdornment: <AttachFileIcon />,
              }}
            />
            <MuiFileInput
              sx={{ height: "8vh" }}
              fullWidth
              label="Upload your image"
              value={image2}
              onChange={setImage2}
              InputProps={{
                inputProps: {
                  accept: "video/*",
                },
                endAdornment: <AttachFileIcon />,
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Price "
              variant="outlined"
              sx={{ marginLeft: "1vw", width: "15vw" }}
              inputProps={{
                maxLength: 400,
                type: "number", 
                onInput: handleInputChange, 
              }}
              InputProps={{
                sx: {
                  color: handleColor(),
                  fontSize: "20px",
                  borderRadius: "20px",
                },
              }}
            />

            <TextField
              id="outlined-basic"
              label="No of Tickets "
              variant="outlined"
              sx={{ marginLeft: "1vw", width: "15vw" }}
              inputProps={{
                maxLength: 400,
                type: "number", 
                onInput: handleInputChange, 
              }}
              InputProps={{
                sx: {
                  color: handleColor(),
                  fontSize: "20px",
                  borderRadius: "20px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Address 1(House No, Street Name)"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  color: handleColor(),
                  fontSize: "20px",
                  borderRadius: "20px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic-multiline"
              label="Address 2(City, State, Country, Pincode)"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              InputProps={{
                sx: {
                  color: handleColor(),
                  fontSize: "20px",
                  borderRadius: "20px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              variant="contained"
              sx={{
                marginTop: "4vh",
                width: "10vw",
                height: "5vh",
                marginLeft: "auto",
                marginRight: "auto",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
