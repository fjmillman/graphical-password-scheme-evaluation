import React from 'react';
import * as PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import { withStyles } from '@material-ui/core/styles';
import { DragDropContext } from 'react-dnd';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlined from '@material-ui/icons/FiberManualRecordOutlined';
import HTML5Backend from 'react-dnd-html5-backend';
import DraggablePassIcon from './DraggablePassIcon';
import getStageProgress from '../store/selectors/getStageProgress';
import removeIconPair from '../store/updaters/removeIconPair';

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  progressDots: {
    flexGrow: 1,
  },
  progressIcon: {
    fontSize: 14,
  },
  gridList: {
    width: 255,
    height: 350,
  },
});

const PassIconDragAndDrop = ({ classes, passIcons }) => {
  const activeProgress = value => (
    <IconButton onClick={() => removeIconPair(value)}>
      <FiberManualRecord className={classes.progressIcon} />
    </IconButton>
  );

  const inactiveProgress = (
    <IconButton disabled>
      <FiberManualRecordOutlined className={classes.progressIcon} />
    </IconButton>
  );

  const progressIcons = getStageProgress()
    .concat(Array(6 - getStageProgress().length).fill(false))
    .map((value, key) => (
      <Grid key={key} item>
        {value ? activeProgress(value) : inactiveProgress}
      </Grid>
    ));

  const passIconGrid = passIcons.map(passIcon => (
    <GridListTile key={passIcon}>
      <DraggablePassIcon passIcon={passIcon} />
    </GridListTile>
  ));

  return (
    <div className={classes.root}>
      <Grid container className={classes.progressDots} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={0}>
            {progressIcons}
          </Grid>
        </Grid>
      </Grid>
      <GridList cellHeight={75} className={classes.gridList} cols={3}>
        {passIconGrid}
      </GridList>
    </div>
  );
};

PassIconDragAndDrop.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  passIcons: PropTypes.arrayOf(PropTypes.string),
};

export default DragDropContext(HTML5Backend)(
  withStyles(styles)(view(PassIconDragAndDrop))
);
