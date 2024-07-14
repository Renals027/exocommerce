import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Autocomplete,
  Box,
  TextField,
  Toolbar,
  Typography
} from "@mui/material";
import { NavStyles } from './styles';

export const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">
          <span style={{ color: "#2c2d3f" }}>S</span>laner
          <span style={{ color: "#2c2d3f" }}>Z</span>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Autocomplete
          options={[
            {value:"all",label:"All"},
            {value:"laptop",label:"Laptop"},
            {value:"mobile",label:"Mobile"},
          ]}
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: "white",
              paddingRight: "1rem !important",
              borderRadius: "0.4rem 0rem 0rem 0.4rem",
            }
          }}
          renderInput={
            (params) => (
              <TextField
                {...params}
                placeholder="Search"
                size="small"
                sx={{...NavStyles.textFieldSearch,width:120}}
              />
            )
          }
        />
        <TextField
          placeholder="Search"
          size="small"
          sx={NavStyles.textFieldSearch}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{gap:'2rem',display:'flex'}}>
          <PersonOutlineIcon sx={{ fontSize: "2.4rem" }} />
          <ShoppingCartIcon sx={{ fontSize: "2.4rem" }} />
          <NotificationsIcon sx={{ fontSize: "2.4rem" }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
