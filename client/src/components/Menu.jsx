import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, ListSubheader, Divider } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import DescriptionIcon from '@material-ui/icons/Description';

export default function Menu({ updateFormState, coachName, coachId }) {
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState((prev) => !prev);
  };

  // Sign out function
  const signOut = () => {
    Auth.signOut();
    updateFormState((prev) => ({ ...prev, formType: 'signUp' }));
    // window.location = '/';
  };

  return (
    <>
      <IconButton
        onClick={toggleDrawer()}
      >
        <MenuRoundedIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={toggleDrawer()}
      >
        <List>
          <ListSubheader>{coachName}</ListSubheader>
          <ListSubheader>Coach ID: #{coachId}</ListSubheader>
          <Divider />
          <Link to="/" style={{ textDecoration: 'none', color: 'black'}}>
            <ListItem button onClick={signOut}>
              <ListItemIcon>
                <ExitToAppRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </Link>
          <ListItem>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Documentation" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
