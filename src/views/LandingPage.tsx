import * as React from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const drawerWidth = 500;

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    margin: '-8px',
    
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,

  },
  
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#BBDEFB',
    padding: theme.spacing.unit * 3,

  },
});

class LandingPage extends React.Component<any, any> {
  state = {
    anchor: 'right',
  };

  handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      anchor: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    console.log('render this');
    const drawer = (
      <Drawer 
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <Divider />
 
        <Divider />

      </Drawer>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography>{'You think water moves fast? You should see ice.'}</Typography>
          </main>
          {drawer}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

const styledComponent = withStyles(styles)(LandingPage);
export default connect(mapStateToProps)(styledComponent);
