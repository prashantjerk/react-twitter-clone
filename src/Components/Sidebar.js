import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import AddIcon from "@mui/icons-material/Add";
import Button from "@material-ui/core/Button";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitter_icon" />
      <SidebarOption active text="Home" Icon={HomeIcon} />
      <SidebarOption text="Explore" Icon={SearchIcon} />
      <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarOption text="Message" Icon={MailOutlineIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOption text="Lists" Icon={ListAltIcon} />
      <SidebarOption text="Profile" Icon={PersonOutlineOutlinedIcon} />
      <SidebarOption text="More" Icon={MoreHorizOutlinedIcon} />
      <SidebarOption text="Tweet" Icon={AddIcon} />

      {/* Button -> Tweet  */}
      <Button variant="contained" className="sidebar__tweet">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
