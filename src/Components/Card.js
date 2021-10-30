import React from 'react';
import {makeStyles} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import icon from '.././Components/i_font.png';

var UseStyles = makeStyles({
  mainBox: {
    padding: 20,
  },
  Box: {
    borderRadius: 0,
    width: 400,
    height: 'auto',
    backgroundColor: 'black',
    textAlign: 'center',
  },
  icon: {
    borderRadius: '5px 5px 0px 0px',
    padding: 35,
    backgroundColor: '#56655f',
  },
  title: {
    paddingTop: 15,
    color: 'white',
    fontSize: 20,
  },
  Description: {
    fontSize: 20,
    padding: '10px 63px 10px 63px',
    color: '#65757e',
  },
  addCircle: {
    fontSize: 30,
    color: 'white',
    borderRadius: '100%',
    padding: '1px 10px 1px 10px',
    marginBottom: 10,
    backgroundColor: '#1c2026',
  },
  addMinusCirce: {
    fontSize: 30,
    color: 'white',
    borderRadius: '100%',
    padding: '0 12px 0 12px',
    backgroundColor: '#1c2026',
    margin: 15,
  },
});

export default function Card() {
  const classes = UseStyles();

  // Changable settings for the card component
  const Title = 'BLOCK';
  const plusIcon = '+';
  const minusIcon = '-';

  const Description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const DescriptionExpand =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum eros nisi, eu sagittis nisl feugiat quis.';

  const [open, setOpen] = React.useState(false);
  const [descript, setDescript] = React.useState(Description);

  const handleClickOpen = () => {
    setDescript(DescriptionExpand);
  };

  const handleClose = () => {
    setDescript(Description);
  };

  function expandableBtn() {
    if (!open) {
      return (
        <IconButton
          onClick={() => {
            handleClickOpen();
            setOpen(true);
          }}
        >
          <div className={classes.addCircle}>{plusIcon}</div>
        </IconButton>
      );
    } else {
      return (
        <IconButton
          onClick={() => {
            handleClose();
            setOpen(false);
          }}
        >
          <div className={classes.addMinusCirce}>{minusIcon}</div>
        </IconButton>
      );
    }
  }

  return (
    <div className={classes.mainBox}>
      <div className={classes.Box}>
        <div className={classes.icon}>
          <img src={icon} alt='font icon' />
        </div>
        <div className={classes.title}>{Title}</div>
        <div className={classes.Description}>{descript}</div>
        {expandableBtn()}
      </div>
    </div>
  );
}
