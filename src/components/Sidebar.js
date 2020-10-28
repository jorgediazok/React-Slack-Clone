import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from '../components/SidebarOption';
import '../styles/Sidebar.css';
import {
  BookmarkBorder,
  Drafts,
  ExpandLess,
  FileCopy,
  Inbox,
  Apps,
  PeopleAlt,
  Add,
  ExpandMore,
} from '@material-ui/icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Jorge Dev</h2>
          <h3>
            <FiberManualRecordIcon />
            Jorge Díaz
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel Browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show Less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} title="Add Channel" />
    </div>
  );
}

export default Sidebar;
