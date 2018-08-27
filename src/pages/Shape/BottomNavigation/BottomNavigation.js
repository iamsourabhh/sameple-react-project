import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const styles = {
  root: {
    width: 500
  }
};

class LabelBottomNavigation extends React.Component {
  render() {
    const { activeProject } = this.props;

    return (
      <BottomNavigation
        showLabels
        value={activeProject}
        onChange={this.props.onTabChange}
      >
        <BottomNavigationAction label="Project 1" value="project-1" />
        <BottomNavigationAction label="Project 2" value="project-2" />
        <BottomNavigationAction label="Project 3" value="project-3" />
        <BottomNavigationAction label="Project 4" value="project-4" />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(LabelBottomNavigation);
