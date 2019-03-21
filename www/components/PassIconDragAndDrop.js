import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import { withStyles } from '@material-ui/core/styles';
import { DragDropContext } from 'react-dnd';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlined from '@material-ui/icons/FiberManualRecordOutlined';
import DraggablePassIcon from './DraggablePassIcon';
import HTML5Backend from 'react-dnd-html5-backend';
import { getStageProgress } from '../store/selectors/getStageProgress';
import { removeIconPair } from '../store/updaters/removeIconPair';

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  progressDots: {
    flexGrow: 1
  },
  progressIcon: {
    fontSize: 14
  },
  gridList: {
    width: 250,
    height: 350
  }
});

const PassIconDragAndDrop = props => {
  const activeProgress = value => (
    <IconButton onClick={() => removeIconPair(value)}>
      <FiberManualRecord className={props.classes.progressIcon} />
    </IconButton>
  );

  const inactiveProgress = (
    <IconButton disabled>
      <FiberManualRecordOutlined className={props.classes.progressIcon} />
    </IconButton>
  );

  const progressIcons = getStageProgress()
    .concat(Array(6 - getStageProgress().length).fill(false))
    .map((value, key) => (
      <Grid key={key} item>
        {value ? activeProgress(value) : inactiveProgress}
      </Grid>
    ));

  const passIcons = props.passIcons.map(passIcon => (
    <GridListTile key={passIcon}>
      <DraggablePassIcon passIcon={passIcon} />
    </GridListTile>
  ));

  return (
    <div className={props.classes.root}>
      <Grid container className={props.classes.progressDots} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={0}>
            {progressIcons}
          </Grid>
        </Grid>
      </Grid>
      <GridList cellHeight={75} className={props.classes.gridList} cols={3}>
        {passIcons}
      </GridList>
    </div>
  );
};

PassIconDragAndDrop.propTypes = {
  classes: PropTypes.object.isRequired,
  passIcons: PropTypes.object.isRequired
};

export default DragDropContext(HTML5Backend)(
  withStyles(styles)(view(PassIconDragAndDrop))
);
