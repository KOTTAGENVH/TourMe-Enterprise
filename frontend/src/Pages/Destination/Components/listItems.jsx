import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from "@mui/icons-material/Add";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import BarChartIcon from "@mui/icons-material/BarChart";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const MainListItems = () => {
  const navigate = useNavigate();
  const { 0: firstParam } = useParams();
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  const isAddDestination = window.location.pathname.includes("addDestination");

  const handleColor = () => {
    if (darkmode) {
      return "white";
    } else {
      return "black";
    }
  }

  const handleBackgroundColor = () => {
    if (darkmode) {
      return "blue";
    } else {
      return "Bisque";
    }
  }

  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemIcon>
          <CorporateFareIcon />
        </ListItemIcon>
        <ListItemText primary="View All" />
      </ListItemButton>
      <Divider />
      <ListItemButton
        onClick={() => {
          navigate("/adminaccess/add");
        }}
        sx={{ backgroundColor: isAddDestination ? handleBackgroundColor() : "inherit", color: isAddDestination ? handleColor() : "inherit" }}
      >
        <ListItemIcon>
          <AddIcon sx={{color: isAddDestination ? handleColor() : "inherit"}}/>
        </ListItemIcon>
        <ListItemText primary="Add" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Check Orders" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemIcon>
          <DoneOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Validate Ticket" />
      </ListItemButton>
    </React.Fragment>
  );
};

export default MainListItems;