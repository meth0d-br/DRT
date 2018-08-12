import * as React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { find } from 'lodash';

interface propTypes {
  classes: any,
  meta?: any,
  murals: any,
  setSelectedCallback: any
}

const defaultProps = {
  meta: {
    mural: {
      active: '',
      selected: ''
    }
  },
  murals: {},
  setSelectedCallback: null
};

const styles = (theme: Theme) => createStyles({
  active: {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    height: '24px',
    padding: '3px',
    width: '100%'
  },
  blankPaper: {
    background: 'transparent'
  },
  inactive: {
    color: theme.palette.grey['400'],
    height: '24px',
    padding: '3px',
    width: '100%'
  },
  mural: {
    maxWidth: '100%'
  },
  muralContainer: {
    cursor: 'pointer',
    padding: '6px',
    position: 'relative'
  },
  murals: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  stitch: {
    background: theme.palette.common.white,
    height: '20px',
    left: 0,
    position: 'absolute',
    width: '100%'
  }
});

const Murals: React.SFC<propTypes> = props => {

  const setSelected = selected => {

    props.setSelectedCallback(selected);

  }

  const { classes, meta, murals } = props;

  return (
    <div className={classes.murals}>
      {murals.map(mural => {
        const active = mural.id === meta.mural.active ? true : false;
        const selected = mural.id === meta.mural.selected ? true : false;
        return (
          <Paper onClick={() => setSelected(mural.id)} key={mural.id} className={selected ? [classes.muralContainer, classes.muralSelected].join(' ') : [classes.muralContainer, classes.blankPaper].join(' ')} elevation={selected ? 2 : 0}>
            {active
              ? <div className={classes.active}><Typography color="inherit" align="center">Active</Typography></div>
              : <div className={classes.inactive}><Typography color="inherit" align="center">{mural.description}</Typography></div>
            }
            <img className={classes.mural} src={mural.url} alt={mural.description} />
            {selected
              ? <div className={classes.stitch}></div>
              : null
            }
          </Paper>
        )
      })}
    </div>
  );

}

Murals.defaultProps = defaultProps;

export default withStyles(styles)(Murals);
