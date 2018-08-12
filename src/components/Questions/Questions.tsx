import * as React from 'react';
import { connect } from 'react-redux';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';
import DeleteForever from '@material-ui/icons/DeleteForever';

interface propTypes {
  ages: any,
  classes: any,
  meta?: any,
  mural: any,
  questions: any,
  setTabValueCallback: any
  tabValue?: number
}

const defaultProps = {
  ages: [],
  meta: {
    language: 'en',
    mural: {
      active: ''
    }
  },
  mural: {
    description: ''
  },
  questions: {},
  setTabValueCallback: null,
  tabValue: 0
};

const styles = (theme: Theme) => createStyles({
  root: {
    marginTop: '1px',
  },
  cardQuestion: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.grey['200']
    },
    '&:hover $cardTools': {
      visibility: 'visible'
    }
  },
  cardControls: {
    display: 'flex',
    flexGrow: 1
  },
  cardTitle: {
    alignItems: 'flex-start',
    display: 'flex'
  },
  cardTitleText: {
    flexGrow: 1
  },
  cardTools: {
    marginTop: '-12px',
    visibility: 'hidden'
  },
  fab: {
    marginTop: '-4px'
  },
  languageGroup: {
    flexDirection: 'row',
    marginRight: theme.spacing.unit * 4
  },
  radioRoot: {
    height: '38px'
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: theme.palette.primary.main,
  },
  tabRoot: {
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 2,
    '&:hover': {
      color: theme.palette.primary.light,
      opacity: 1,
    },
    '&$tabSelected': {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: theme.palette.primary.main,
    },
  },
  tabSelected: {}
});

const Questions: React.SFC<propTypes> = props => {

  const setTabValue = (_event, tabValue) => {

    return props.setTabValueCallback(tabValue);

  }

  const { ages, classes, meta, mural, questions, tabValue } = props;

  return (
    <Card className={classes.root} elevation={2}>
      <CardContent>
        <div className={classes.cardTitle}>
          <Typography gutterBottom variant="headline">Questions for {mural.description}</Typography>
          <div className={classes.cardControls}>
            <div className={classes.cardTitleText}>
              {mural.id === meta.mural.active
                ? <Button disabled mini color="primary">This is the active mural</Button>
                : <Button mini color="primary">Make this mural active</Button>
              }
            </div>
            <RadioGroup
              aria-label="language"
              className={classes.languageGroup}
              name="language"
              value={meta.language}
            >
              <FormControlLabel control={<Radio classes={{ root: classes.radioRoot }} color="primary" />} label="English" value="en" />
              <FormControlLabel control={<Radio classes={{ root: classes.radioRoot }} color="primary" />} label="Español" value="es" />
            </RadioGroup>
            <Button className={classes.fab} color="primary" mini variant="fab"><Add /></Button>
          </div>
        </div>
        <Tabs classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }} onChange={setTabValue} value={tabValue}>
          {ages.map(age => {
            return (
              <Tab
                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                disableRipple
                key={age.start + age.end}
                label={'Ages ' + age.start + ' - ' + age.end}
              />
            );
          })}
        </Tabs>
        <Card elevation={0} square>
          {questions.map((question, index) => {
            return (
              <React.Fragment key={question.question}>
                <CardContent className={classes.cardQuestion}>
                  <div className={classes.cardTitle}>
                    <Typography className={classes.cardTitleText} variant="subheading">{(index +1) + '. ' + question.question}</Typography>
                    <div className={classes.cardTools}>
                      <IconButton>
                        <DeleteForever />
                      </IconButton>
                    </div>
                  </div>
                  <List dense>
                    {question.answers.map((answer, index) => {
                      return (
                        <ListItem key={index + answer.answer}>
                          <ListItemText>{(index + 1) + '. ' + answer.answer}</ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                </CardContent>
                <Divider />
              </React.Fragment>
            )
          })}
        </Card>
      </CardContent>
    </Card>
  );

}

Questions.defaultProps = defaultProps;

export default withStyles(styles)(Questions);
