import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu'; 

function User() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
  };

  return (

    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Icon>account_circle</Icon>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem disabled>J</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>


  );
}

export default User 