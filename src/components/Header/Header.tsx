import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => createStyles({
  root: {
    color: theme.palette.common.white
  }
});

const Header = props => {

  const { classes } = props;

  return (
    <AppBar className={classes.root} position='fixed' color='primary'>
      <Toolbar>
        <Typography color="inherit" variant="title">Administration</Typography>
      </Toolbar>
    </AppBar>
  );

}

export default withStyles(styles)(Header);
