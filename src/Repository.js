import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Chip,
  makeStyles
} from "@material-ui/core";
import PeopleIcon from '@material-ui/icons/People';
import StarIcon from '@material-ui/icons/Star';
import RestaurantIcon from '@material-ui/icons/Restaurant';

const useStyles = makeStyles({
  root: {
    marginTop: '1rem'
  },
  summaryContainer: {
    flexDirection: 'column',
  },
  summaryHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  },
  chip: {
    marginLeft: '0.5rem'
  }
});

const Repository = ({repo, expanded, onToggled}) => {
  const {node: {name, url, owner: {login}, stargazerCount, forkCount}} = repo;
  const classes = useStyles();
  return (

    <ExpansionPanel
      expanded={expanded}
      onChange={onToggled}
      className={classes.root}
    >
      <ExpansionPanelSummary classes={{content: classes.summaryContainer}}>
        <div className={classes.summaryHeader}>
          <a href={url}> {name} </a>
          <div>
            <Chip label={`by ${login}`} avatar={<PeopleIcon/>} className={classes.chip}/>
            <Chip label={stargazerCount} avatar={<StarIcon/>} className={classes.chip}/>
            <Chip label={forkCount} avatar={<RestaurantIcon/>} className={classes.chip}/>
          </div>
        </div>
      </ExpansionPanelSummary>
    </ExpansionPanel>
  );
};

export default Repository;