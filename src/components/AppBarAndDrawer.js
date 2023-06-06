import BookIcon from "@mui/icons-material/Book";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuIcon from "@mui/icons-material/Menu";
import PaymentsIcon from "@mui/icons-material/Payments";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";
import { MenuItemsNuruja } from "./dataProvider";
import { Link } from "react-router-dom";

export const AppBarAndDrawer = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    justifyContent: "space-evenly",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    // width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${ theme.spacing(4) })`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar/>
      <Divider/>
      <List>
        { MenuItemsNuruja.map((text, index) => (
          <ListItem key={ text } disablePadding>
            <ListItemButton component={ Link } to={ `/${ text.toLowerCase() }` } color="primary">
              <ListItemIcon>
                <Button>
                  { text.toLowerCase() === "books" ? (
                    <BookIcon/>
                  ) : text.toLowerCase() === "members" ? (
                    <PeopleIcon/>
                  ) : text.toLowerCase() === "balances" ? (
                    <PaymentsIcon/>
                  ) : (
                    <LibraryBooksIcon/>
                  ) }
                </Button>
              </ListItemIcon>
              <ListItemText primary={ text }/>
            </ListItemButton>
          </ListItem>
        )) }
      </List>
      <Divider/>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <AppBar
        position="fixed"
        sx={ {
          width: { sm: `calc(100% - ${ props.drawerWidth }px)` },
          ml: { sm: `${ props.drawerWidth }px` },
        } }
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={ handleDrawerToggle }
            sx={ { mr: 2, display: { sm: "none" } } }
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={ { flexGrow: 1 } }>
            <Button variant="text" component={ Link } to={ "/" } color="primary" size="large"
                    sx={ { fontWeight: "bold", color: "white" } }>
              Nuruja
            </Button>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={ { "aria-label": "search" } }
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={ { width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } } }
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */ }
        <Drawer
          container={ container }
          variant="temporary"
          open={ mobileOpen }
          onClose={ handleDrawerToggle }
          ModalProps={ {
            keepMounted: true, // Better open performance on mobile.
          } }
          sx={ {
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: props.drawerWidth,
            },
          } }
        >
          { drawer }
        </Drawer>
        <Drawer
          variant="permanent"
          sx={ {
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: props.drawerWidth,
            },
          } }
          open
        >
          { drawer }
        </Drawer>
      </Box>
    </>
  );
};
