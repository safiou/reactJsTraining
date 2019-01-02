import React from 'react';
import styles from './styles'
import PropTypes from 'prop-types';
import {Paper,InputBase,Divider,IconButton, withStyles} from '@material-ui/core';
import {KeyboardArrowDown as FilterIcon ,Search as SearchIcon } from '@material-ui/icons';


const CustomizedInputBase =(props) =>{
    const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase className={classes.input} placeholder="Search Google Maps" />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} />
      <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
        <FilterIcon />
      </IconButton>
    </Paper>
  );
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);