import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const Header = ({ refresh }) => {
  return (
    <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={styles.flex}>
            ASETS-LUX ASSIGNMENT
          </Typography>
          <Button
            onClick={() => {
              refresh();
            }}
            color="inherit"
          >
            REFRESH
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
